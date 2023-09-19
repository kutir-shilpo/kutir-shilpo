"use client";
import Information from "@/component/icons/information";
import Button from "@/component/ui/button";
import useAuthContext from "@/hook/useAuthContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
const AddProduct = () => {
  const [productImage, setProductImage] = useState("");
  const [error, setError] = useState(false);
  const [productImageLoader, setProductImageLoader] = useState(false);
  const [loader, setLoader] = useState(false);
  const { user } = useAuthContext();
  const { replace } = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setLoader(false);
    setError(false);
    if (!productImage) {
      return setError(true);
    }
    const newProduct = { ...data, image: productImage };
    fetch(`${process.env.NEXT_PUBLIC_api}api/addProduct`, {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        replace("/");
        console.log(data);
        setLoader(false);
      })
      .catch((err) => {
        setLoader(false);
        console.log(err);
        toast.error(err?.message);
      });
  };
  // product image upload
  const productImageHandler = ({ target: { files } }) => {
    setProductImageLoader(true);
    const formData = new FormData();
    formData.append("image", files[0]);
    console.log(formData);
    fetch(
      `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_imagebb_key}`,
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setError(false);
        setProductImage(data.data.display_url);
        setProductImageLoader(false);
      })
      .catch((err) => {
        setProductImageLoader(false);
        setError(false);
        toast.error(err?.message);
        console.log(err);
      });
  };
  return (
    <>
      {user?.photoURL ? (
        <div className="mx-auto w-[98%] md:w-[85%] lg:w-3/4 xl:w-2/4 rounded p-5 bg-slate-100">
          <h2 className="text-lg mb-3 rounded text-[#516067]">Add Product</h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-2"
          >
            {/* first row */}
            <div className="grid sm:grid-cols-4 gap-3">
              <label className="col-span-3">
                <input
                  type="text"
                  placeholder="product Name"
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
                    productImage || "product image"
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
              {error && (
                <span className="flex gap-1 items-center text-red-500 font-normal mt-[2px]">
                  <Information /> required
                </span>
              )}
            </div>
            {/* third row */}
            <div className="grid sm:grid-cols-2 gap-3">
              <label>
                <input
                  value={user?.displayName && user?.displayName}
                  {...register("ownerName")}
                  className="w-full border text-[#516067] bg-slate-50 p-2 rounded focus:bg-white"
                />
              </label>
              <label>
                <input
                  value={user?.email && user?.email}
                  {...register("ownerEmail")}
                  className="w-full border text-[#516067] bg-slate-50 p-2 rounded focus:bg-white"
                />
              </label>
            </div>
            {/* forth row */}
            <label>
              <input
                value={user?.photoURL && user?.photoURL}
                {...register("ownerImage")}
                className="w-full border text-[#516067] bg-slate-50 p-2 rounded focus:bg-white"
              />
            </label>
            {/* fifth row */}
            <div className="grid sm:grid-cols-5 gap-3">
              <label className="col-span-3">
                <input
                  type="text"
                  placeholder="manufacture industry"
                  {...register("manufactureAuthority", { required: true })}
                  className="w-full border text-[#516067] bg-slate-50 p-2 rounded focus:bg-white"
                />
                {errors.manufactureAuthority && (
                  <span className="flex gap-1 items-center text-red-500 font-normal mt-[2px]">
                    <Information /> required
                  </span>
                )}
              </label>
              <label className="col-span-2">
                <select
                  className="w-full border text-[#516067] bg-slate-50 p-2 rounded focus:bg-white"
                  {...register("category")}
                >
                  <option value="glass">Glass</option>
                  <option value="clay">Clay</option>
                  <option value="bamboo">Bamboo</option>
                  <option value="other">Other</option>
                </select>
                {errors.category && (
                  <span className="flex gap-1 items-center text-red-500 font-normal mt-[2px]">
                    <Information /> required
                  </span>
                )}
              </label>
            </div>
            {/* sixth row */}
            <div className="grid sm:grid-cols-6 gap-3">
              <label className="col-span-2">
                <input
                  type="date"
                  {...register("madeDate", { required: true })}
                  className="w-full border text-[#516067] bg-slate-50 p-2 rounded focus:bg-white"
                />
                {errors.madeDate && (
                  <span className="flex gap-1 items-center text-red-500 font-normal mt-[2px]">
                    <Information /> required
                  </span>
                )}
              </label>
              <label className="col-span-3">
                <input
                  type="text"
                  placeholder="location"
                  {...register("location", { required: true })}
                  className="w-full border text-[#516067] bg-slate-50 p-2 rounded focus:bg-white"
                />
                {errors.location && (
                  <span className="flex gap-1 items-center text-red-500 font-normal mt-[2px]">
                    <Information /> required
                  </span>
                )}
              </label>
              <label>
                <input
                  type="number"
                  placeholder="৳ price"
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
            {/* seven row */}
            <label>
              <textarea
                cols={50}
                rows={4}
                placeholder="description"
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
                  accept trams & condition
                </Link>
              </label>
              {errors.agreed && (
                <span className="flex gap-1 items-center text-red-500 font-normal">
                  <Information /> required
                </span>
              )}
            </div>
            {productImageLoader || loader ? (
              <Button>Add product</Button>
            ) : (
              <Button type="submit">Add product</Button>
            )}
          </form>
        </div>
      ) : (
        <div className="loader"></div>
      )}
    </>
  );
};

export default AddProduct;
