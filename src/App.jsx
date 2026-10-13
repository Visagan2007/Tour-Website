import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
// Preserve the original global stylesheet order while splitting page JavaScript.
import './Components/Trips/Trips.css';
import './Components/ContactUs/ContactUs.css';
import './Components/AboutUs/AboutUs.css';
import './App.css';
import Footer from './Components/Footer/Footer';
const Trips = lazy(() => import('./Components/Trips/Trips'));
const ContactUs = lazy(() => import('./Components/ContactUs/ContactUs'));
const AboutUs = lazy(() => import('./Components/AboutUs/AboutUs'));
function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <main>
          <Suspense fallback={null}>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/trips' element={<Trips />}></Route>
              <Route path='/aboutus' element={<AboutUs/>}></Route>
              <Route path='/contact' element={<ContactUs />}></Route>
            </Routes>
          </Suspense>
        </main>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}
export default App;
