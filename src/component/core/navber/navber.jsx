"use client";
import Button from "@/component/ui/button";
import useAuthContext from "@/hook/useAuthContext";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import googleLogo from "@/assets/google-logo.png";
import ActiveLink from "../activeLink/activeLink";

const NavBer = () => {
  const [error, setError] = useState("");
  const [isLogoutShow, setIsLogoutShow] = useState(false);
  const { user, logout, userLoading, googleUser, setDashboardTitle } =
    useAuthContext();
  const { replace } = useRouter();

  const googleLoginHandler = () => {
    googleUser()
      .then(() => {})
      .catch((err) => {
        setError(err.message);
        console.log(error);
      });
  };
  // logout handler
  const logoutHandler = () => {
    logout().then(() => {});
  };

  // check out handler
  const checkoutHandler = () => {
    replace("/dashboard");
    setDashboardTitle("cart items");
  };
  // profile button handler
  const profileBtnHandler = () => {
    replace("/dashboard");
    setDashboardTitle("profile settings");
  };
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
            <button
              onClick={checkoutHandler}
              className="flex items-center mr-1"
            >
              <Icon
                className="text-2xl"
                icon="heroicons-outline:shopping-cart"
              />
              <span className="text-sm relative bottom-1">{0}</span>
            </button>
            {/*user profile*/}
            {user ? (
              <div className="relative">
                <Image
                  width={35}
                  height={35}
                  className="rounded-full cursor-pointer"
                  src={user?.photoURL}
                  alt="user photo"
                  onClick={() => setIsLogoutShow(!isLogoutShow)}
                  title={user?.displayName}
                />
                <div
                  className={`scale-0 ${
                    isLogoutShow && "scale-100"
                  } absolute top-[115%] right-0 flex flex-col w-32 rounded border`}
                >
                  <button
                    onClick={logoutHandler}
                    className="text-left flex items-center gap-1 px-3 pt-1 bg-slate-50 w-full hover:bg-white"
                  >
                    <Icon icon="heroicons-outline:logout" />
                    Logout
                  </button>
                  <button
                    onClick={profileBtnHandler}
                    className="text-left flex items-center gap-1 px-3 pb-2 bg-slate-50 w-full hover:bg-white"
                  >
                    <Icon
                      className="text-lg relative mt-1"
                      icon="heroicons-outline:user-circle"
                    />{" "}
                    profile
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div onClick={googleLoginHandler} className="cursor-pointer">
                  {!userLoading ? (
                    <Button className="flex gap-1 items-center">
                      <Image
                        height={18}
                        width={18}
                        src={googleLogo}
                        alt="google logo"
                      />
                      Login
                    </Button>
                  ) : (
                    <div className="mini-loader"></div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      {/* navber bottom side */}
      <div className="bg-slate-100">
        <div className="container flex gap-4 justify-end text-sm font-semibold">
          <ActiveLink className="py-3 px-5" href="/">Home</ActiveLink>
          <ActiveLink className="py-3 px-5" href="/products">Products</ActiveLink>
          {user && <ActiveLink className="py-3 px-5" href="/dashboard">Dashboard</ActiveLink>}
        </div>
      </div>
    </>
  );
};

export default NavBer;
