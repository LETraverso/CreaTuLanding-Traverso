import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import "./css/App.css"

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
       
        <Route
          path="/"
          element={
            <ItemListContainer
              title="Nala Decoración de Interiores"
              description="Descubre nuestras propuestas únicas para transformar tu hogar."
            />
          }
        />
       
        <Route path="/category/:categoryId" element={<ItemListContainer />} />

        <Route path="/item/:id" element={<ItemDetailContainer />} />

        <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
