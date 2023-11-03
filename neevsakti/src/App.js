
import './App.css';
import { BrowserRouter as Router, Route, Switch, BrowserRouter, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';

function App() {
  return (
    <>
        <BrowserRouter>

            <Routes>
            
            {/* Main landing Page */}
            <Route>
                <LandingPage/>
            </Route>

            {/* Gallery */}
            <Route>

            </Route>

            {/* Achivements */}
            <Route>

            </Route>

            {/* Events */}
            <Route>

            </Route>

            {/* About Us */}
            <Route>

            </Route>

            {/* Contant Us */}
            <Route>

            </Route>

            </Routes>
        
        
        </BrowserRouter>
    </>
  );
}

export default App;
