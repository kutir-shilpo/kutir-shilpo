"use client";
import { Icon } from "@iconify/react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-white container">
      {/* footer top part */}
      <div className="border-b py-6">
        <h4 className="text-[#516067] text-xl md:text-3xl font-semibold mb-6">
          Kutir Shilpo
        </h4>
        <ul className="flex gap-3">
          <li className="h-8 w-8 flex justify-center items-center bg-[#8298a2] text-white rounded">
            <Link href="/">
              <Icon icon="fa-brands:facebook-f" />
            </Link>
          </li>
          <li className="h-8 w-8 flex justify-center items-center bg-[#8298a2] text-white rounded">
            <Link href="/">
              <Icon icon="fa-brands:twitter" />
            </Link>
          </li>
          <li className="h-8 w-8 flex justify-center items-center bg-[#8298a2] text-white rounded">
            <Link href="/">
              <Icon icon="fa-brands:linkedin-in" />
            </Link>
          </li>
          <li className="h-8 w-8 flex justify-center items-center bg-[#8298a2] text-white rounded">
            <Link href="/">
              <Icon icon="fa-brands:youtube" />
            </Link>
          </li>
        </ul>
      </div>
      {/* footer bottom part */}
      <div className="flex justify-between py-3 text-sm">
        <p>Copyright © 2023 KutirShilpo.com | All rights reserved.</p>
        <div className="flex gap-2">
            <Link href="/">privacy</Link> |
            <Link href="/">Trams & Condition</Link>
        </div>
      </div>
    </div>
  );
};
export default Footer;
