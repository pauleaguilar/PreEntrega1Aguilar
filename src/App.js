import logo from './logo.svg';
import './App.css';
import ItemListContainer from "./components/ItemListContainer";
import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget';

function App() {
  return (
   <div className="App">
      <main>
        <NavBar/>
        <ItemListContainer/>
      </main>


   </div>
  );
}

export default App;
