import { getUserAddedProduct } from "@/server/productsCollection";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email");
  const result = await getUserAddedProduct(email);
  return NextResponse.json(result);
};
