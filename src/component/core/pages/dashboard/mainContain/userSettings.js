"use client";

import useAuthContext from "@/hook/useAuthContext";
import { Icon } from "@iconify/react";
import Image from "next/image";

const UserSettings = () => {
  const { user } = useAuthContext();
  return (
    <div className="text-[#516067]">
      <div className="flex flex-col items-center pb-2 border-b border-slate-300">
        {user?.photoURL ? (
          <Image
            height={100}
            width={100}
            className="rounded-full"
            src={user?.photoURL}
            alt="user image"
          />
        ) : (
          <Icon className="text-8xl" icon="heroicons-solid:user-circle" />
        )}
        <div className="flex items-center gap-1">
          <h4 className="text-lg font-normal mt-2">{user?.displayName}</h4>
          <Icon
            className="cursor-pointer relative top-1"
            icon="heroicons-outline:pencil"
          />
        </div>
      </div>
      <div className="flex items-center gap-1">
        <h4 className="font-normal mt-2">{user?.email}</h4>
        <Icon
          className="cursor-pointer relative top-1"
          icon="heroicons-outline:pencil"
        />
      </div>
      <div className="flex items-center gap-1">
        <h4 className="font-normal">Bio</h4>
        <Icon
          className="cursor-pointer relative"
          icon="heroicons-outline:pencil"
        />
      </div>
      <h4 className="text-lg font-semibold mt-4">Additional Information</h4>
        <h4 className="font-normal mt-1">User Id: {user?.uid}</h4>
        <h4 className="font-normal mt-1">Your account {user?.metadata?.creationTime} to present.</h4>
        <h4 className="font-normal mt-1">Lest time you logged {user?.metadata?.lastSignInTime}.</h4>
    </div>
  );
};

export default UserSettings;
