import { deleteCartItem } from "@/server/usersCollection";
import { NextResponse } from "next/server";

export const PATCH = async (request) => {
  const productInfo = await request.json();
  const result = await deleteCartItem(productInfo);
  return NextResponse.json(result);
};
