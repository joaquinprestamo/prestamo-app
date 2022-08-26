// STYLES
import './App.css';
import 'core-js/actual';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar title="tender" description="cafetería" />
      <div className='container my-5'>
        .<div className="row">
          <ItemListContainer name="Latte & Medialuna" description="Latte + Medialuna + Jugo de Naranja" image="promo-latte.jpg" price="$650"  />
          <ItemListContainer name="Latte & Granola" description="Latte + Copón de Granola con leche y frutas + Jugo de Naranja" image="promo-granola.jpg" price="$800"  />
          <ItemListContainer name="Latte & Tostada" description="Latte + Tostada con Palta + Jugo de Naranja" image="promo-tostada.jpg" price="$600"  />
          <ItemListContainer name="Latte & Tostado" description="Latte + Tostado de Jamón & Queso + Jugo de Naranja" image="promo-tostado.jpg" price="$650"  />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
