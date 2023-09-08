"use client";
import Button from "@/component/ui/button";
import { Icon } from "@iconify/react";
import Link from "next/link";

const NavBer = () => {
  return (
    <>
      {/* navber top side */}
      <div className="bg-white">
        <div className="container py-4 flex justify-between items-center">
          <h4 className="text-[#516067] text-2xl md:text-3xl font-semibold">
            Kutir Shilpo
          </h4>
          <div className="flex justify-between items-center gap-2">
            <form className="w-[30vw] mr-20 flex items-center justify-between py-2 px-3 rounded-full border border-[#516067]">
              <input
                type="text"
                placeholder="Search for Categories"
                className="text-sm bg-transparent"
              />
              <button>
                <Icon
                  className="text-[#516067]"
                  icon="heroicons-outline:search"
                />
              </button>
            </form>
            <Link href="/checkout" className="flex">
              <Icon
                className="text-xl"
                icon="heroicons-outline:shopping-cart"
              />
              <span className="text-sm relative bottom-1">{0}</span>
            </Link>
            <Button>Signup/Login</Button>
          </div>
        </div>
      </div>
      {/* navber bottom side */}
      <div className="bg-slate-100">
        <div className="container py-3 flex gap-4 justify-end text-sm font-semibold">
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
            <Link href="/dashboard">Dashboard</Link>
        </div>
      </div>
    </>
  );
};

export default NavBer;
