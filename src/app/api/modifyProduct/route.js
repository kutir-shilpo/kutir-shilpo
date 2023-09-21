import { deleteProductById, modifiedProduct } from "@/server/productsCollection";
import { NextResponse } from "next/server";

export const PATCH = async (request) => {
  const body = await request.json();
  const result = await modifiedProduct(body);
  return NextResponse.json(result);
};
export const DELETE= async (request)=>{
  const {searchParams}=new URL(request.url);
  const id = searchParams.get("id");
  const result = await deleteProductById(id);
  return NextResponse.json(result);
}
