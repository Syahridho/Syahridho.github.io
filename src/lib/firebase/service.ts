import { app } from "./init";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const fireStore = getFirestore(app);

export const retriveData = async (collectionName: string) => {
  const snapShot = await getDocs(collection(fireStore, collectionName));
  const data = snapShot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return data;
};
