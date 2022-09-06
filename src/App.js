// STYLES
import './App.css';
import 'core-js/actual';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  


  return (
    <div>      
      <NavBar title="tender" description="cafetería" />
        <ItemListContainer />   
        <ItemDetailContainer />
      <Footer />
    </div>
  );
}

export default App;
