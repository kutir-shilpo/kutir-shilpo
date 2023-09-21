"use client";
import Information from "@/component/icons/information";
import Button from "@/component/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { usePathname } from "next/navigation";
import useProduct from "@/hook/useProduct";

const ModifyProduct = () => {
  const path = usePathname();
  const id = path.split("/").slice(-1)[0];
  const [product, loading] = useProduct(id);
  // console.log(product);

  const [productImage, setProductImage] = useState("");
  const [productImageLoader, setProductImageLoader] = useState(false);
  const [loader, setLoader] = useState(false);
  const { replace } = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setLoader(true);
    const modifiedProduct = { id:product._id,...data, image: productImage||product?.image };
    // console.log("modified product",modifiedProduct);
    // modified product 
    fetch(`${process.env.NEXT_PUBLIC_api}api/modifyProduct`, {
      method: "PATCH",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(modifiedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("modified successful");
        setLoader(false);
        replace("/manage-products");
      })
      .catch((err) => {
        setLoader(false);
        console.log(err);
        toast.error(err?.message);
      });
  };
  // product image upload
  const productImageHandler = ({ target: { files } }) => {
    // setProductImageLoader(true);
    const formData = new FormData();
    formData.append("image", files[0]);
    fetch(
      `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_imagebb_key}`,
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setProductImage(data.data.display_url);
        setProductImageLoader(false);
      })
      .catch((err) => {
        setProductImageLoader(false);
        toast.error(err?.message);
        console.log(err);
      });
  };

  return (
    <div className="mx-auto w-[98%] md:w-[85%] lg:w-3/4 xl:w-2/4 ">
      <h2 className="text-xl pb-1 mb-2">
        <span className="border-b-2 border-[#516067]">Modify</span> Product
      </h2>
      {(!loading) ? (
        <div className="rounded border p-8 shadow bg-white">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-2"
          >
            <h2 className="text-lg mt-2 mb-1 border-b rounded text-[#516067]">
              Product Information
            </h2>
            {/* first row */}
            <div className="grid sm:grid-cols-5 gap-3">
              <label className="col-span-4">
                <input
                  type="text"
                  placeholder="product Name"
                  defaultValue={product?.title}
                  {...register("title", { required: true })}
                  className="w-full border text-[#516067] bg-slate-50 p-2 rounded focus:bg-white"
                />
                {errors.title && (
                  <span className="flex gap-1 items-center text-red-500 font-normal mt-[2px]">
                    <Information /> required
                  </span>
                )}
              </label>
              <label>
                <input
                  type="number"
                  placeholder="quantity"
                  defaultValue={product?.quantity}
                  {...register("quantity", { required: true })}
                  className="w-full border text-[#516067] bg-slate-50 p-2 rounded focus:bg-white"
                />
                {errors.quantity && (
                  <span className="flex gap-1 items-center text-red-500 font-normal mt-[2px]">
                    <Information /> required
                  </span>
                )}
              </label>
            </div>
            {/* second row */}
            <div className="w-full">
              <label
                htmlFor="productImage"
                className="rounded block w-full text-[#516067] bg-slate-50 focus:bg-white cursor-pointer border p-2"
              >
                <span className="w-full">
                  {productImageLoader ? (
                    <span className="mini-loader h-4 w-4"></span>
                  ) : (
                    productImage || product?.image
                  )}
                </span>
                <input
                  onChange={productImageHandler}
                  name="productImage"
                  id="productImage"
                  type="file"
                  className="w-full hidden"
                />
              </label>
            </div>

            {/* third row */}
            <div className="grid sm:grid-cols-4 gap-3">
              <label className="col-span-3">
                <input
                  type="text"
                  placeholder="manufacture industry"
                  defaultValue={product?.manufactureAuthority}
                  {...register("manufactureAuthority", { required: true })}
                  className="w-full border text-[#516067] bg-slate-50 p-2 rounded focus:bg-white"
                />
                {errors.manufactureAuthority && (
                  <span className="flex gap-1 items-center text-red-500 font-normal mt-[2px]">
                    <Information /> required
                  </span>
                )}
              </label>
              <label>
                <input
                  type="number"
                  placeholder="৳ price"
                  defaultValue={product?.price}
                  {...register("price", { required: true })}
                  className="w-full border text-[#516067] bg-slate-50 p-2 rounded focus:bg-white"
                />
                {errors.price && (
                  <span className="flex gap-1 items-center text-red-500 font-normal mt-[2px]">
                    <Information /> required
                  </span>
                )}
              </label>
            </div>

            {/* forth row */}
            <label>
              <textarea
                cols={50}
                rows={4}
                placeholder="description"
                defaultValue={product?.description}
                {...register("description", { required: true })}
                className="w-full border text-[#516067] bg-slate-50 p-2 rounded focus:bg-white"
              ></textarea>
              {errors.description && (
                <span className="flex gap-1 items-center text-red-500 font-normal mt-[2px]">
                  <Information /> required
                </span>
              )}
            </label>
            {/* check box */}
            <div>
              <label className="flex gap-1 items-center">
                <input
                  type="checkbox"
                  {...register("agreed", { required: true })}
                  className="cursor-pointer h-4 w-4"
                />
                <Link
                  href="/trams&conditions"
                  className="relative bottom-[2px] text-sm text-[#516067] border-b border-[#516067]"
                >
                  Are you sure you want to do this
                </Link>
              </label>
              {errors.agreed && (
                <span className="flex gap-1 items-center text-red-500 font-normal">
                  <Information /> required
                </span>
              )}
            </div>
            {productImageLoader || loader ? (
              <span className="flex justify-center py-2 px-3 rounded text-white bg-[#94aeb9] hover:bg-[#8298a2]">Loading...</span>
            ) : (
              <Button type="submit">Modify Submit</Button>
            )}
          </form>
        </div>
      ) : (
        <div className="loader"></div>
      )}
    </div>
  );
};

export default ModifyProduct;
