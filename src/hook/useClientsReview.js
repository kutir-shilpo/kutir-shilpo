"use client";

import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const useClientsReview = () => {
  const [clientLoading, setClientLoading] = useState(true);
  const [clientsReviews, setClientsReviews] = useState([]);
  useEffect(() => {
    fetch(`/api/clientsReview`)
      .then((res) => res.json())
      .then((data) => {
        setClientsReviews(data);
        setClientLoading(false);
      })
      .catch((err) => {
        toast.error("something was wrong");
        setClientLoading(false);
      });
  }, []);

  return [clientsReviews, clientLoading];
};

export default useClientsReview;
