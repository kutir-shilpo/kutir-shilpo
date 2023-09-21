import { modifiedProduct } from "@/server/productsCollection";
import { NextResponse } from "next/server";

export const PATCH = async (request) => {
  const body = await request.json();
  const result = await modifiedProduct(body);
  return NextResponse.json(result);
};
