"use client";
import Dashboard from "@/component/icons/dashboard";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
const dashboardItems = [
  {
    _id: 1,
    title: "profile settings",
    href: "/profile-settings",
    icon: <Icon icon="fa-solid:user-cog" />,
  },
  {
    _id: 2,
    title: "cart items",
    href: "/cart-items",
    icon: <Icon icon="fa-solid:shopping-cart" />,
  },
  {
    _id: 3,
    title: "add product",
    href: "/add-product",
    icon: (
      <Icon
        className="text-lg relative top-[1px]"
        icon="fa-solid:plus-circle"
      />
    ),
  },
  {
    _id: 4,
    title: "manage products",
    href: "/manage-products",
    icon: <Icon className="text-sm relative top-[2px]" icon="iwwa:settings" />,
  },
  {
    _id: 5,
    title: "payment history",
    href: "/payment-history",
    icon: (
      <Icon
        className="text-lg relative top-[2px]"
        icon="heroicons-outline:currency-bangladeshi"
      />
    ),
  },
];

const TopBar = () => {
  const [barShow, setBarShow] = useState(false);
  const currentPage = usePathname();
  return (
    <div className="h-full flex flex-col lg:flex-row items-end lg:justify-end text-[#516067] rounded">
      <div className="lg:hidden mt-2 py-2 bg-white sm:bg-slate-50 px-4 rounded shadow">
        <Dashboard
          onClick={() => setBarShow(!barShow)}
          className="text-2xl"
        />
      </div>
      <div
        className={`${
          barShow ? "block mt-2" : "hidden lg:flex"
        } bg-slate-50 lg:bg-slate-100 border border-t-0 gap-3`}
      >
        {dashboardItems?.map((item) => (
          <Link
            key={item?._id}
            href={item?.href}
            className={`${
              currentPage === item?.href &&
              "bg-white font-normal text-[#8298a2]"
            } flex cursor-pointer gap-1 py-2 px-3 2xl:px-6 items-center`}
          >
            {item?.icon} {item?.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopBar;
