"use client";
import Delete from "@/component/icons/delete";
import Edit from "@/component/icons/edit";
import useAuthContext from "@/hook/useAuthContext";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const ManageProducts = () => {
  const [addedItems, setAddedItems] = useState([]);
  const [addedItemsLoader, setAddedItemsLoader] = useState(true);
  const { user } = useAuthContext();
  useEffect(() => {
    setAddedItemsLoader(true)
    fetch(
      `${process.env.NEXT_PUBLIC_api}api/userAddedProduct?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setAddedItemsLoader(false);
        setAddedItems(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, [user]);
  return (
    <div className="w-full md:w-2/3 mx-auto text-[#516067]">
      <h2 className="text-xl pb-1">
        <span className="border-b-2 border-[#516067]">Manage</span> your Product
      </h2>
      <table className="mt-3 border rounded">
        <thead>
          <tr className="grid grid-cols-12 items-center border-b bg-slate-200">
            <th className="col-span-1 py-1 px-2">#</th>
            <th className="col-span-2 py-1 px-2">image</th>
            <th className="col-span-4 py-1 px-2">Name</th>
            <th className="col-span-2 py-1 px-2">৳</th>
            <th className="col-span-2 py-1 px-2">Modify</th>
            <th className="col-span-1 py-1 px-2">Delete</th>
          </tr>
        </thead>
        {!addedItemsLoader ? (
          addedItems && addedItems?.length > 0 ? (
            addedItems.map((item, index) => (
              <tbody key={index}>
                <tr className="border-b text-center grid grid-cols-12 items-center">
                  <td className="col-span-1 py-1 px-2 border-r">{index + 1}</td>
                  <td className="col-span-2 py-1 px-2 border-r">
                    <Image
                      src={item?.image}
                      height={50}
                      width={50}
                      className="mx-auto rounded"
                      alt="product image"
                    />
                  </td>
                  <td className="col-span-4 py-1 px-2 border-r">
                    {item?.name || "unknown"}
                  </td>
                  <td className="text-right col-span-2 py-1 px-2 border-r">
                    {item?.price || 0}৳
                  </td>
                  <td className="col-span-2 flex justify-center items-center h-full py-1 px-2 border-r">
                    <Link href={`/modify-product/${item?._id}`}>
                      <Edit className="text-lg" />
                    </Link>
                  </td>
                  <td className="col-span-1 py-1 px-2 flex justify-center">
                    <Delete className="text-xl text-red-600 cursor-pointer" />
                  </td>
                </tr>
              </tbody>
            ))
          ) : (
            <tbody>
              <tr className="text-lg font-normal text-[#516067] text-center py-2">
                <td>No product available</td>
              </tr>
            </tbody>
          )
        ) : (
          <tbody>
            <tr className="flex justify-center">
              <td className="mini-loader h-5 w-5 my-2"></td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  );
};

export default ManageProducts;
