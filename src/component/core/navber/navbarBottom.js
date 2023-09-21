import { useEffect } from "react";
import ActiveLink from "../activeLink/activeLink";
import useAuthContext from "@/hook/useAuthContext";

const NavbarBottom = ({ className, setIsLogoutShow,setIsRightOpen }) => {
  const { user } = useAuthContext();

  // is logged show
  useEffect(() => {
    setIsLogoutShow(false);
  }, [user, setIsLogoutShow]);
  return (
      <div onClick={()=>setIsRightOpen(prev=>prev=!prev)} className={`${className} mt-3 sm:mt-0`}>
        <div className="container sm:bg-slate-50 sm:border-b">
          <div className="bg-slate-50 sm:bg-slate-100 flex flex-col sm:flex-row sm:justify-end sm:bg-transparent text-sm font-semibold">
          <ActiveLink className="py-3 px-5 w-full text-right md:text-center sm:w-fit text-[#516067]" href="/">
            Home
          </ActiveLink>
          <ActiveLink className="py-3 px-5 w-full text-right md:text-center sm:w-fit text-[#516067]" href="/products">
            Products
          </ActiveLink>
          {user && (
            <ActiveLink className="py-3 px-5 w-full text-right md:text-center sm:w-fit text-[#516067]" href="/profile-settings">
              Dashboard
            </ActiveLink>
          )}
          </div>
        </div>
      </div>
  );
};

export default NavbarBottom;
