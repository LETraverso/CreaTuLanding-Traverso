import { db } from "./utils/firebase";
import { collection, getDocs, getDoc, doc, query, where } from "firebase/firestore";

const COL = "posts";
const colRef = collection(db, COL);

/**
 * Lista de productos.
 * - Sin parámetro: trae TODOS.
 * - Con categoryId: filtra por el campo "category" (string).
 * Devuelve el mismo shape que usabas: { id:number, title, price, category, description, img? }
 * (Agrega _docId por si algún día lo necesitás; no rompe nada.)
 */
export async function fetchProducts(categoryId) {
  const q = categoryId
    ? query(colRef, where("category", "==", String(categoryId)))
    : colRef;

  const snap = await getDocs(q);
  return snap.docs.map((d) => {
    const data = d.data();
    // ⚠️ Conservamos tu id NUMÉRICO del mock, NO lo pisamos con el docId
    return { ...data, _docId: d.id };
  });
}

/**
 * Un producto por id (numérico, el mismo que agregaste como campo "id" en cada doc).
 * Si no existe, devuelve undefined (igual que tu mock original con .find()).
 */
export async function fetchProductById(id) {
  // 1) Buscar por el CAMPO "id" (number)
  const q = query(colRef, where("id", "==", Number(id)));
  const snap = await getDocs(q);
  if (!snap.empty) {
    const d = snap.docs[0];
    const data = d.data();
    return { ...data, _docId: d.id };
  }

  // 2) (Fallback opcional) Si algún día usás docId = id
  const ref = doc(db, COL, String(id));
  const s = await getDoc(ref);
  if (s.exists()) {
    const data = s.data();
    return { ...data, _docId: s.id };
  }

  // Igual que antes: si no hay resultado, undefined
  return undefined;
}
