"use client";
import blackLogo from "@/assets/black-logo.png"
import Button from "@/component/ui/button";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-white text-[#516067] md:mt-12">
      <div className="container mt-10">
        {/* footer top part */}
        <div className="grid md:grid-cols-2 gap-4 border-b py-8">
          {/* logo */}
          <div className="h-full flex flex-col">
            <Link href="/" className=" text-xl md:text-3xl font-semibold">
              <Image
              src={blackLogo}
              width={250}
              height={250}
              alt="white logo"
              />
            </Link>
            <h4 className="mt-auto text-lg ">Follow Us:</h4>
            <ul className="flex gap-3 mt-3">
              <li className="h-8 w-8 flex justify-center items-center bg-[#8298a2] text-white rounded">
                <Link href="/">
                  <Icon className="text-sm" icon="fa-brands:facebook-f" />
                </Link>
              </li>
              <li className="h-8 w-8 flex justify-center items-center bg-[#8298a2] text-white rounded">
                <Link href="/">
                  <Icon className="text-sm" icon="fa-brands:twitter" />
                </Link>
              </li>
              <li className="h-8 w-8 flex justify-center items-center bg-[#8298a2] text-white rounded">
                <Link href="/">
                  <Icon className="text-sm" icon="fa-brands:linkedin-in" />
                </Link>
              </li>
              <li className="h-8 w-8 flex justify-center items-center bg-[#8298a2] text-white rounded">
                <Link href="/">
                  <Icon className="text-sm" icon="fa-brands:youtube" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {/* footer menu */}
            <div>
              <h4 className="font-semibold  mb-2">
                <span className="border-b-2 border-slate-100">Menu</span>
              </h4>
              <ul className="flex flex-col gap-1">
                <li className="text-sm font-medium ">
                  <Link href="/">Home</Link>
                </li>
                <li className="text-sm font-medium ">
                  <Link href="/products">Products</Link>
                </li>
                <li className="text-sm font-medium ">
                  <Link href="/">Google Login</Link>
                </li>
                <li className="text-sm font-medium ">
                  <Link href="/">FAQs</Link>
                </li>
                <li className="text-sm font-medium ">
                  <Link href="/">Contract</Link>
                </li>
                <li className="text-sm font-medium ">
                  <Link href="/">Community</Link>
                </li>
              </ul>
            </div>
            {/* feedback submit */}
            <div>
              <h4 className="font-semibold  mb-2">
                <span className="border-b-2 border-slate-100">Feedback</span>
              </h4>
              <p className="text-sm ">
                Give Your Valuable Review, We allows appreciate your positive
                review.
              </p>
              <form>
                <input
                  className="border w-full py-2 px-3 rounded my-3"
                  type="text"
                  placeholder="Enter Your Email"
                />
                <Button className="w-full">Subscribe</Button>
              </form>
            </div>
          </div>
        </div>
        {/* footer bottom part */}
        <div className="md:flex justify-between py-5 text-sm">
          <p>Copyright © 2023 KutirShilpo.com | All rights reserved.</p>
          <div className="flex gap-2">
            <Link href="/">privacy</Link> |
            <Link href="/trams&conditions">Trams & Condition</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
