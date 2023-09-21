import DbConnect from "./DbConnect";

// get user from db
export const getUserFromDb = async (email) => {
  const db = await DbConnect();
  const userCollection = db.collection("users");
  const query = { email: email };
  return userCollection.findOne(query);
};
export const addUserInDb = async (loggedUser) => {
  const db = await DbConnect();
  const userCollection = db.collection("users");
  const query = { email: loggedUser?.email };
  const option = { upsert: true };
  const updateUser = {
    $set: {
      name: loggedUser?.name,
      email: loggedUser?.email,
      image: loggedUser?.image,
      userId: loggedUser?.userId,
      metadata: loggedUser?.metadata,
    },
  };
  return userCollection.updateOne(query, updateUser, option);
};

export const updateUserActivityInDb = async (updateInfo) => {
  const db = await DbConnect();
  const userCollection = db.collection("users");
  const query = { email: updateInfo?.email };
  // cart and payment info update
  let updateDoc;
  updateInfo?.cartItem && updateInfo?.payments
    ? (updateDoc = {
        $set: {
          $pull:{cartItem:{id:updateInfo?.cartItem?.id}},
          $push: { payments: updateInfo?.payments },
        },
      })
    : updateInfo?.cartItem &&
      (updateDoc = {
        $push: { cartItem: updateInfo?.cartItem },
      });
  return userCollection.updateOne(query, updateDoc);
};
export const deleteCartItem=async(productInfo)=>{
  const db = await DbConnect();
  const userCollection = db.collection("users");
  const query = {email:productInfo?.email}
  const updateDoc={
      $pull:{cartItem:{id:productInfo?.id}}
  }
  return userCollection.updateOne(query,updateDoc);
}
