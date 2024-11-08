/*import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import About from './pages/About';
import Events from './pages/Events';
import Officers from './pages/Officers';
import DesignTeams from './pages/Design-Teams';
import Gallery from './pages/Gallery';
import Resources from './pages/Resources';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';

import IndividualDesignTeam from './pages/IndividualDesignTeam';

function App() {
    return (
        <>
            <Toaster />
            <Navbar />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Landing />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/events' element={<Events />} />
                    <Route path='/officers' element={<Officers />} />
                    <Route path='/design-teams' element={<DesignTeams />} />
                    <Route path='/gallery' element={<Gallery />} />
                    <Route path='/resources' element={<Resources />} />
                    <Route path='/individual' element={<IndividualDesignTeam />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    );
}

export default App;
*/

// App.jsx
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import About from './pages/About';
import Events from './pages/Events';
import Officers from './pages/Officers';
import DesignTeams from './pages/Design-Teams';
import Gallery from './pages/Gallery';
import Resources from './pages/Resources';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';
import IndividualDesignTeam from './pages/IndividualDesignTeam';
import NotFound from './pages/NotFound'; // Optional: For handling undefined routes

function App() {
    return (
        <BrowserRouter>
            <Toaster />
            <Navbar />
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='/about' element={<About />} />
                <Route path='/events' element={<Events />} />
                <Route path='/officers' element={<Officers />} />
                <Route path='/design-teams' element={<DesignTeams />} />
                <Route path='/gallery' element={<Gallery />} />
                <Route path='/resources' element={<Resources />} />
                <Route path='/individual' element={<IndividualDesignTeam />} />
                {/* Optional: Catch-all route for 404 Not Found */}
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
