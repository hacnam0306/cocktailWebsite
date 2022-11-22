import './App.scss';
import Navigation from './components/Navigation/Navigation';
import Footer from './pages/Footer/Footer';
import Header from './pages/Header/Header';
import Photograph from './pages/Photograph/Photograph';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import OurCocktail from './components/OurCocktail/OurCocktail';
import About from './components/About/About';
import Order from './components/Order/Order';

function App() {
  return (
    <div className="App container-fluid ">
      <BrowserRouter>
            <Navigation/>
         <Routes>
            <Route path="/" element={ <Photograph/> }/>
            <Route path="/ourCocktail" element={ <OurCocktail/> }/>
            <Route path="/about" element={ <About/> }/>
            <Route path="/order" element={ <Order/> }/>
         </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
