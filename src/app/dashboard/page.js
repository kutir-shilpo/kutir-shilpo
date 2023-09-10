"use client";
import MainContain from "@/component/core/pages/dashboard/mainContain/mainContain";
import TopBar from "@/component/core/pages/dashboard/topBar/topBar";
import useAuthContext from "@/hook/useAuthContext";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const { replace } = useRouter();
  const { user, userLoading } = useAuthContext();
  if (userLoading) {
    return <div className="text-[#516067] text-center mt-4">Loading...</div>;
  }
  if (!user) {
    return replace("/");
  }
  return (
    <>
      <TopBar />
      <MainContain />
    </>
  );
};

export default Dashboard;
