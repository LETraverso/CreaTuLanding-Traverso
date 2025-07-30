import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer
        title="¡Bienvenido a Nala Decoración de Interiores!"
        description="Descubre nuestras propuestas únicas para transformar tu hogar."
      />
    </div>
  );
}

export default App;

