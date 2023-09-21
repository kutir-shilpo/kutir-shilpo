"use clint";
import useCart from "@/hook/useCart";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

const CartItems = () => {
  // todo: cart items problem must be solve
  const [cartItems, cartLoading, deleteCartItem] = useCart();
  return (
    <div className="w-full overflow-x-scroll xl:w-2/3 mx-auto text-[#516067]">
      <h2 className="text-xl pb-1">
        <span className="border-b-2 border-[#516067]">Cart</span> Items
      </h2>
      <table className="mt-3 mx-auto w-[500px] sm:min-w-full border rounded">
        <thead>
          <tr className="grid grid-cols-12 items-center border-b bg-slate-200">
            <th className="col-span-1 py-1 px-2">#</th>
            <th className="col-span-2 py-1 px-2">image</th>
            <th className="col-span-4 py-1 px-2">Name</th>
            <th className="col-span-2 py-1 px-2">৳</th>
            <th className="col-span-2 py-1 px-2">Checkout</th>
            <th className="col-span-1 py-1 px-2 flex justify-center">
              <Icon
                className="text-lg text-red-600 cursor-pointer"
                icon="heroicons-outline:trash"
              />
            </th>
          </tr>
        </thead>
        {!cartLoading ? (
          cartItems && cartItems?.length > 0 ? (
            cartItems.map((item, index) => (
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
                    {item?.name}
                  </td>
                  <td className="text-right col-span-2 py-1 px-2 border-r">
                    {item?.price}৳
                  </td>
                  <td className="col-span-2 flex justify-center items-center h-full py-1 px-2 border-r">
                    <Link href={`/checkout/${item.id}`}>
                      <Icon
                        className="text-2xl"
                        icon="heroicons-solid:credit-card"
                      />
                    </Link>
                  </td>
                  <td className="col-span-1 py-1 px-2 flex justify-center">
                    <Icon
                      onClick={() => deleteCartItem(item?.id)}
                      className="text-lg text-red-600 cursor-pointer"
                      icon="heroicons-outline:trash"
                    />
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

export default CartItems;
