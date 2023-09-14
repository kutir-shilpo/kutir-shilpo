"use client";
import { useState } from "react";
import NavbarTop from "./navbarTop";
import NavbarBottom from "./navbarBottom";
import BarLeft from "@/component/icons/bar-left";
import BarRight from "@/component/icons/bar-right";

const NavBer = () => {
  const [isLogoutShow, setIsLogoutShow] = useState(false);
  // small device states
  const [isLeftOpen,setIsLeftOpen]=useState(false);
  const [isRightOpen,setIsRightOpen]=useState(false);
  return (
    <>
      {/* navber top */}
      <div className={`bg-white`}>
        <div className="container py-3 sm:py-4 sm:flex justify-between items-center">
          <h4 className="text-[#516067] text-2xl md:text-3xl font-semibold">
            Kutir Shilpo
          </h4>
          <NavbarTop
            className="hidden sm:flex"
            setIsLogoutShow={setIsLogoutShow}
            isLogoutShow={isLogoutShow}
          />
        </div>
      </div>
      {/* navber bottom side */}
      <NavbarBottom className="hidden sm:flex" setIsLogoutShow={setIsLogoutShow} />

      {/* small device navbar */}
      <div className="container">
          <div className="sm:hidden p-3 px-7 rounded bg-slate-50 flex justify-between">
            <BarLeft onClick={()=>setIsLeftOpen(!isLeftOpen)} className="text-2xl" />
            <BarRight onClick={()=>setIsRightOpen(!isRightOpen)} className="text-2xl" />
          </div>
          {/* mobile navbar */}
          <NavbarTop
            className={`${isLeftOpen?"sm:hidden flex":"hidden"}`}
            setIsLogoutShow={setIsLogoutShow}
            isLogoutShow={isLogoutShow}
          />
        </div>
      <NavbarBottom className={`${isRightOpen?"sm:hidden flex":"hidden"}`} setIsLogoutShow={setIsLogoutShow} />
    </>
  );
};

export default NavBer;
