import { app } from "./init";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore";

const fireStore = getFirestore(app);

export const retrieveData = async (collectionName: string) => {
  const snapShot = await getDocs(collection(fireStore, collectionName));
  const data = snapShot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return data;
};

export const retrieveDataById = async (collectionName: string, id: string) => {
  const snapshot = await getDoc(doc(fireStore, collectionName, id));
  const data = snapshot.data();
  return data;
};
