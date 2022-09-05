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
        <ItemListContainer />     
      <Footer />
    </div>
  );
}

export default App;
