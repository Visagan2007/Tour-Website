import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import Trips from './Components/Trips/Trips';
import ContactUs from './Components/ContactUs/ContactUs';
import AboutUs from './Components/AboutUs/AboutUs';
import './App.css';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/trips' element={<Trips />}></Route>
          <Route path='/aboutus' element={<AboutUs/>}></Route>
          <Route path='/contact' element={<ContactUs />}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}
export default App;
