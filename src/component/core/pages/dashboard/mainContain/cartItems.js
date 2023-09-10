"use clint";
import { Icon } from "@iconify/react";

const CartItems = () => {
  const cart = [
    {
      id: 1,
      name: "just name",
      quantity: 1,
      price: 1200,
    },
  ];
  return (
    <>
      {cart.length > 0 ? (
        <>
          <table className="w-full md:w-2/3 mx-auto border rounded text-[#516067]">
            <thead>
              <tr className="grid grid-cols-11 items-center border-b bg-slate-200">
                <th className="col-span-1 py-1 px-2">#</th>
                <th className="col-span-4 py-1 px-2">Name</th>
                <th className="col-span-2 py-1 px-2">quantity</th>
                <th className="col-span-2 py-1 px-2">৳</th>
                <th className="col-span-1 py-1 px-2">buy</th>
                <th className="col-span-1 py-1 px-2">delete</th>
              </tr>
            </thead>
            {cart.map((item, index) => (
              <tbody key={index}>
                <tr className="text-center grid grid-cols-11 items-center">
                  <td className="col-span-1 py-1 px-2 border-r">{index + 1}</td>
                  <td className="col-span-4 py-1 px-2 border-r">
                    {item?.name}
                  </td>
                  <td className="col-span-2 py-1 px-2 border-r">
                    {item?.quantity}
                  </td>
                  <td className="text-right col-span-2 py-1 px-2 border-r">
                    {item?.price}৳
                  </td>
                  <td className="col-span-1 py-1 px-2 border-r flex justify-center">
                    <Icon
                      className="text-lg"
                      icon="heroicons-solid:credit-card"
                    />
                  </td>
                  <td className="col-span-1 py-1 px-2 flex justify-center">
                    <Icon className="text-lg" icon="heroicons-outline:trash" />
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </>
      ) : (
        <div className="text-xl font-normal text-[#516067] text-center mt-4">
          No product available
        </div>
      )}
    </>
  );
};

export default CartItems;
