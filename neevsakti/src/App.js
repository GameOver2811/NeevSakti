
import './App.css';
import { BrowserRouter as Router, Route, Switch, BrowserRouter, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import AboutUs from './Pages/AboutUs';
import Gallery from './Pages/Gallery';
import ContactUs from './Pages/ContactUs';
import Achievements from './Pages/Achievements';
import Donate from './Pages/Donate';
import Events from './Pages/Events';

function App() {
  return (
    <>
        <BrowserRouter>

            <Routes>

                <Route exact path="/" element={<LandingPage/>} /> {/* This is where LandingPage is used */}
                <Route path="/gallery" element={<Gallery/>} />
                <Route path="/achievements" element={<Achievements/>} />
                <Route path="/aboutus" element={<AboutUs/>} />
                <Route path="/events" element={<Events/>} />
                <Route path="/contactus" element={<ContactUs/>} />
                <Route path="/donate" element={<Donate/>} />

            </Routes>
        
        
        </BrowserRouter>
    </>
  );
}

export default App;
