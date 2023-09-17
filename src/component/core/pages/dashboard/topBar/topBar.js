"use client";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const dashboardItems =[
  {
    _id:1,
    title:"profile settings",
    href:"/profile-settings",
    icon:<Icon icon="fa-solid:user-cog" />
  },
  {
    _id:2,
    title:"cart items",
    href:"/cart-items",
    icon:<Icon icon="fa-solid:shopping-cart" />
  },
  {
    _id:3,
    title:"add product",
    href:"/add-product",
    icon:<Icon className="text-lg relative top-[1px]"  icon="fa-solid:plus-circle" />
  },
  {
    _id:4,
    title:"manage products",
    href:"/manage-products",
    icon:<Icon className="relative top-[2px]"  icon="fa-solid:pen" />
  },
  {
    _id:5,
    title:"payment history",
    href:"/payment-history",
    icon:<Icon className="text-lg relative top-[2px]" icon="heroicons-outline:currency-bangladeshi" />
  }
]

const TopBar = () => {
    const currentPage=usePathname();
  return (
    <div className=" h-full flex justify-end text-[#516067] rounded">
      <div className="flex border border-t-0 gap-3">
        {dashboardItems?.map(item=><Link 
        key={item?._id}
        href={item?.href}
        className={`${currentPage===item?.href&&"bg-slate-50 font-normal text-[#8298a2]"} flex cursor-pointer gap-1 py-2 px-6 items-center`}>
          {item?.icon} {item?.title}</Link>)}
      </div>
    </div>
  );
};

export default TopBar;
