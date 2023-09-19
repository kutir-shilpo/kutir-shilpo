import { addProductInDb } from "@/server/productsCollection";
import { NextResponse } from "next/server";

export const POST=async(request)=>{
const product = await request.json();
const result = await addProductInDb(product);
return NextResponse.json(result);
}