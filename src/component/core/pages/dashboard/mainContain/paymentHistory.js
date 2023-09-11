const PaymentHistory = () => {
  const payments = [
    {
      id: 1,
      name: "name 1",
      quantity: 1,
      amount: 1200,
      date: "12/04/2022",
    },
  ];
  return (
    <>
      {payments.length > 0 ? (
        <>
          <table className="w-full md:w-2/3 mx-auto border rounded text-[#516067]">
            <thead>
              <tr className="grid grid-cols-11 items-center border-b bg-slate-200">
                <th className="col-span-1 py-1 px-2">#</th>
                <th className="col-span-4 py-1 px-2">Name</th>
                <th className="col-span-2 py-1 px-2">quantity</th>
                <th className="col-span-2 py-1 px-2">৳</th>
                <th className="col-span-2 py-1 px-2">Date</th>
              </tr>
            </thead>
            {payments.map((item, index) => (
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
                    {item?.amount}৳
                  </td>
                  <td className="text-right col-span-2 py-1 px-2 border-r">
                    {item?.date}
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

export default PaymentHistory;
