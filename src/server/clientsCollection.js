import DbConnect from "./DbConnect";

export const getClientReviewFromDb = async () => {
  const db = await DbConnect();
  const clientsCollection = db.collection("clients");
  return clientsCollection.find().toArray();
};
