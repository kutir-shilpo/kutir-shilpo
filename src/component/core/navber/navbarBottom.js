import { useEffect } from "react";
import ActiveLink from "../activeLink/activeLink";
import useAuthContext from "@/hook/useAuthContext";
import useDashboardBar from "@/hook/useDashboardBar";
import DashboardBar from "../pages/dashboard/dashboardBar/dashboardBar";

const NavbarBottom = ({ className, setIsLogoutShow, setIsRightOpen }) => {
  const { user } = useAuthContext();
  const [, setVisibleDashboardItem] = useDashboardBar();

  // is logged show
  useEffect(() => {
    setIsLogoutShow(false);
  }, [user, setIsLogoutShow]);
  return (
    <div
      className={`${className} mt-3 sm:mt-0`}
    >
      <div className="container sm:bg-slate-50 sm:border-b">
        <div className="bg-slate-50 sm:bg-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-end sm:bg-transparent text-sm font-semibold">
          <ActiveLink
           onClick={() => setIsRightOpen((prev) => (prev = !prev))}
            className="py-3 px-5 w-full text-right md:text-center sm:w-fit text-[#516067]"
            href="/"
          >
            Home
          </ActiveLink>
          <ActiveLink
           onClick={() => setIsRightOpen((prev) => (prev = !prev))}
            className="py-3 px-5 w-full text-right md:text-center sm:w-fit text-[#516067]"
            href="/products"
          >
            Products
          </ActiveLink>
          {user && <DashboardBar />}
        </div>
      </div>
    </div>
  );
};

export default NavbarBottom;
