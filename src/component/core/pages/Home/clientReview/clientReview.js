"use client";

import DotCircle from "@/component/icons/dot-circle";
import DotFilled from "@/component/icons/dot-filled";
import StarFilled from "@/component/icons/star-filled";
import StarOutline from "@/component/icons/star-outline";
import useClients from "@/hook/useClientsReview";
import Image from "next/image";
import React, { useState } from "react";

const ClientReview = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const [clientsReviews, clientsLoading] = useClients();

  const handleCurrentTab = (i) => {
    setCurrentTab(i);
  };

  return (
    <>
      {!clientsLoading ? (
        <div className="mt-10">
          <h2 className="text-xl text-[#516067]  py-4">
            <span className="border-b-2 border-[#516067]">Client</span> Review
          </h2>
          <div className="lg:flex justify-center items-center">
            {/* image */}
            <div className="lg:w-[80%] mx-auto">
              {clientsReviews?.map((client, i) => {
                return (
                  <div key={client?._id}>
                    {currentTab === i && (
                      <div className="flex flex-col lg:w-[75%] mx-auto bg-slate-100 py-14 px-16 rounded-ss-3xl rounded-ee-3xl h-[280px]">
                        <p className="flex items-center">
                          &ldquo;{client?.reviewText}&rdquo;
                        </p>
                        <div className="flex justify-between mt-auto">
                          <div className="flex gap-4 items-center">
                            <Image
                              width={40}
                              height={40}
                              className="rounded-full cursor-pointer h-[50px] w-[50px]"
                              src={client?.clientPicture}
                              alt="client photo"
                            />
                            <div>
                              <p className="font-semibold">
                                {client?.clientName}
                              </p>
                              <small>{client?.designation}</small>
                            </div>
                          </div>
                          <div className="flex justify-center items-center">
                            {[...Array(Number(client?.rating))].map(
                              (_, index) => (
                                <StarFilled key={index} />
                              )
                            )}
                            {[...Array(Number(5 - client?.rating))].map(
                              (_, index) => (
                                <StarOutline key={index} />
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            {/* sl_ide control */}
            <div className="lg:w-[20%] mx-auto flex lg:flex-col justify-center">
              {clientsReviews?.map((client, i) => {
                return (
                  <div
                    className="mx-auto"
                    key={client?._id}
                    onClick={() => handleCurrentTab(i)}
                  >
                    {currentTab === i ? <DotCircle /> : <DotFilled />}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className=""></div>
      )}
    </>
  );
};

export default ClientReview;
