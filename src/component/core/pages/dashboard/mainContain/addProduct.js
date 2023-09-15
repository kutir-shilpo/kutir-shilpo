"use client"
import Information from "@/component/icons/information";
import Button from "@/component/ui/button";
import useAuthContext from "@/hook/useAuthContext";
import { useState } from "react";
import { useForm } from "react-hook-form";
const AddProduct = () => {
    const [tramsAgreed,setTramsAgreed]=useState(false);
  const { user } = useAuthContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setTramsAgreed(data?.agreed)
    console.log(data);
  };
  return (
    <div className="mx-auto w-3/4 md:w-2/4 rounded p-5 bg-slate-100">
      <h2 className="text-lg mb-3 rounded text-[#516067]">Add Product</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        {/* first row */}
        <div className="grid sm:grid-cols-4 gap-3">
          <label className="col-span-3">
            <input
              placeholder="product Name"
              {...register("productName", { required: true })}
              className="w-full border text-[#516067] bg-slate-50 p-2 rounded focus:bg-white"
            />
            {errors.productName && (
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
        <div className="grid sm:grid-cols-2 gap-3">
          <label>
            <input
              value={user?.displayName && user?.displayName}
              {...register("seller", { required: true })}
              className="w-full border text-[#516067] bg-slate-50 p-2 rounded focus:bg-white"
            />
            {errors.seller && (
              <span className="flex gap-1 items-center text-red-500 font-normal mt-[2px]">
                <Information /> required
              </span>
            )}
          </label>
          <label>
            <input
              value={user?.email && user?.email}
              {...register("sellerName", { required: true })}
              className="w-full border text-[#516067] bg-slate-50 p-2 rounded focus:bg-white"
            />
            {errors.sellerName && (
              <span className="flex gap-1 items-center text-red-500 font-normal mt-[2px]">
                <Information /> required
              </span>
            )}
          </label>
        </div>
        {/* third row */}
        <label>
          <input
            placeholder="manufacture industry"
            {...register("manufactureIndustry", { required: true })}
            className="w-full border text-[#516067] bg-slate-50 p-2 rounded focus:bg-white"
          />
          {errors.manufactureIndustry && (
            <span className="flex gap-1 items-center text-red-500 font-normal mt-[2px]">
              <Information /> required
            </span>
          )}
        </label>
        {/* forth row */}
        <div className="grid sm:grid-cols-4 gap-3">
          <label>
            <input
              type="date"
              {...register("manufactureDate", { required: true })}
              className="w-full border text-[#516067] bg-slate-50 p-2 rounded focus:bg-white"
            />
            {errors.manufactureDate && (
              <span className="flex gap-1 items-center text-red-500 font-normal mt-[2px]">
                <Information /> required
              </span>
            )}
          </label>
          <label className="col-span-2">
            <input
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
        {/* fifth row */}
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
            className="cursor-pointer"
          />
          <span className="text-sm text-[#516067]">
            accept trams & condition
          </span>
        </label>
        {errors.agreed && (
            <span className="flex gap-1 items-center text-red-500 font-normal">
              <Information /> required
            </span>
          )}
        </div>

        <Button type="submit">Add product</Button>
      </form>
    </div>
  );
};

export default AddProduct;
