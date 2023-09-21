"use client";
import Dashboard from "@/component/icons/dashboard";
import useDashboardBar from "@/hook/useDashboardBar";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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

const DashboardBar = () => {
  const [visibleDashboardItem, setVisibleDashboardItem] = useDashboardBar();
  const currentPage = usePathname();
  return (
    <div className="h-full relative flex flex-col items-end text-[#516067] rounded">
      <span
        onClick={() => setVisibleDashboardItem(!visibleDashboardItem)}
        className={`${currentPage==="/"||currentPage==="/products"||"bg-white"} cursor-pointer py-3 px-5 w-full text-right md:text-center sm:w-fit text-[#516067]`}
      >
        Dashboard
      </span>
      <div
        onClick={() => setVisibleDashboardItem(!visibleDashboardItem)}
        className={`${
          visibleDashboardItem ? "block mt-1" : "hidden"
        } w-[180px] absolute z-40 rounded top-full bg-slate-50 border border-t-0 gap-3`}
      >
        {dashboardItems?.map((item) => (
          <Link
            key={item?._id}
            href={item?.href}
            className={`${
              currentPage === item?.href &&
              "bg-white font-normal text-[#8298a2]"
            } flex cursor-pointer gap-1 py-2 px-3 items-center`}
          >
            {item?.icon} {item?.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DashboardBar;
