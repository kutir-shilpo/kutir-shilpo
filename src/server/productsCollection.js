import "server-only";
import { ObjectId } from "mongodb";
import DbConnect from "./DbConnect";

export const getProductFromDb = async () => {
  const db = await DbConnect();
  const productsCollection = db.collection("products");
  return productsCollection.find().toArray();
};
export const getProductById = async (id) => {
  const db = await DbConnect();
  const productsCollection = db.collection("products");
  const query = { _id: new ObjectId(id) };
  return productsCollection.findOne(query);
};
export const getProductByCategory = async (category) => {
  const db = await DbConnect();
  const productsCollection = db.collection("products");
  const query = { category: category };
  return productsCollection.find(query).toArray();
};
// users added product
export const getUserAddedProduct=async(email)=>{
  const db = await DbConnect();
  const productsCollection = db.collection("products");
  const query = {ownerEmail:email};
  return productsCollection.find(query).toArray();
}

// search product
export const getProductByTitle = async (title) => {
  // console.log(title);
  const db = await DbConnect();
  const productsCollection = db.collection("products");
  const query = { title: { $regex: title } };
  return productsCollection.find(query).toArray();
};

// add quarry
export const addProductInDb=async(product)=>{
  const db = await DbConnect();
  const productsCollection = db.collection("products");
  return productsCollection.insertOne(product);
}
