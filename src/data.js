import { db } from "./utils/firebase";
import { collection, getDocs, getDoc, doc, query, where } from "firebase/firestore";

const COL = "posts";
const colRef = collection(db, COL);


export async function fetchProducts(categoryId) {
  const q = categoryId
    ? query(colRef, where("category", "==", String(categoryId)))
    : colRef;
    
  const snap = await getDocs(q);
  return snap.docs.map((d) => {
    const data = d.data();

    return { ...data, _docId: d.id };
  });
}

export async function fetchProductById(id) {
 
  const q = query(colRef, where("id", "==", Number(id)));
  const snap = await getDocs(q);
  if (!snap.empty) {
    const d = snap.docs[0];
    const data = d.data();
    return { ...data, _docId: d.id };
  }
 
  const ref = doc(db, COL, String(id));
  const s = await getDoc(ref);
  if (s.exists()) {
    const data = s.data();
    return { ...data, _docId: s.id };
  }

  return undefined;
}
