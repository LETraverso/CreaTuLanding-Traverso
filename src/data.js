export const products = [
  { id: 1, title: "Tríptico Abstracto", price: 42000, category: "abstracto", description: "Set de 3 cuadros abstractos.", img: "https://via.placeholder.com/300x200?text=Abstracto" },
  { id: 2, title: "Hojas Monstera", price: 18000, category: "botanico", description: "Cuadro botánico estilo nórdico.", img: "https://via.placeholder.com/300x200?text=Abstracto" },
  { id: 3, title: "Mapa Urbano", price: 26000, category: "urbano", description: "Poster con mapa de ciudad minimalista.", img: "https://via.placeholder.com/300x200?text=Abstracto" },
  { id: 4, title: "Amanecer en la Playa", price: 35000, category: "paisaje", description: "Lienzo con paisaje marino al amanecer.", img: "https://via.placeholder.com/300x200?text=Abstracto" },
  { id: 5, title: "Montañas Nevadas", price: 39000, category: "paisaje", description: "Cuadro realista de montañas nevadas.", img: "https://via.placeholder.com/300x200?text=Abstracto" },
  { id: 6, title: "Buda Zen", price: 22000, category: "espiritual", description: "Cuadro minimalista con figura de Buda.", img: "https://via.placeholder.com/300x200?text=Abstracto" },
  { id: 7, title: "Nueva York Nocturna", price: 31000, category: "urbano", description: "Vista nocturna de rascacielos iluminados.", img: "https://via.placeholder.com/300x200?text=Abstracto" },
  { id: 8, title: "Selva Tropical", price: 27000, category: "botanico", description: "Pintura vibrante de vegetación tropical.", img: "https://via.placeholder.com/300x200?text=Abstracto" },
  { id: 9, title: "Explosión de Colores", price: 45000, category: "abstracto", description: "Obra abstracta con mezcla de colores intensos.", img: "https://via.placeholder.com/300x200?text=Abstracto" }
];

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export async function fetchProducts(categoryId) {
  await delay(500); 
  if (!categoryId) return products;
  return products.filter(p => p.category === categoryId);
}

export async function fetchProductById(id) {
  await delay(500);
  return products.find(p => String(p.id) === String(id));
}
