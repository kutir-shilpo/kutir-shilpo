"use client";
import useAuthContext from "@/hook/useAuthContext";
import { Icon } from "@iconify/react";
import React from "react";

const TopBar = () => {
    const {setDashboardTitle} = useAuthContext();
  return (
    <div className=" h-full flex justify-end text-[#516067] rounded">
      <ul className="flex py-2 px-6 border border-t-0 gap-3">
        <li onClick={()=>setDashboardTitle("profile settings")} className="flex cursor-pointer gap-1 items-center"><Icon icon="fa-solid:user-cog" /> profile settings</li>
        <li onClick={()=>setDashboardTitle("cart items")} className="flex cursor-pointer gap-1 items-center"><Icon icon="fa-solid:shopping-cart" /> cart items</li>
        <li onClick={()=>setDashboardTitle("payment history")} className="flex cursor-pointer gap-1 items-center"><Icon className="text-lg relative" icon="heroicons-outline:currency-bangladeshi" /> payment history</li>
      </ul>
    </div>
  );
};

export default TopBar;
