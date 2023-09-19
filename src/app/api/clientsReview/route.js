import { getClientReviewFromDb } from "@/server/clientsCollection";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  const result = await getClientReviewFromDb();
  //   console.log(result);
  return NextResponse.json(result);
};
