"use client";
import useAuthContext from "@/hook/useAuthContext";
import React from "react";
import UserSettings from "./userSettings";
import CartItems from "./cartItems";
import PaymentHistory from "./paymentHistory";
import AddProduct from "./addProduct";
import ManageProducts from "./manageProducts";

const MainContain = () => {
  const { dashboardTitle } = useAuthContext();
  return (
    <div className="col-span-4 my-8">
      {dashboardTitle === "profile settings" ? (
        <UserSettings />
      ) : dashboardTitle === "cart items" ? (
        <CartItems />
      ) : dashboardTitle === "add product" ? (
        <AddProduct />
      ) : dashboardTitle === "manage product" ? (
        <ManageProducts />
      ) : (
        <PaymentHistory />
      )}
    </div>
  );
};

export default MainContain;
