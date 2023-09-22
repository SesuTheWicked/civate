import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import WhyUs from './pages/whyUs/whyUs';
import Research from './pages/research/research';
import Results from './pages/results/results';
import Faq from './pages/faq/faq';
import Home from './pages/home/home';
import Pocas from './pages/pocas/Pocas';
import Gate from './pages/gate/Gate';
import Lisa from './pages/lisa/Lisa';


function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/gate' element={<Gate/>}/>
        <Route path='/lisa' element={<Lisa/>}/>
        <Route path='/pocas' element={<Pocas/>}/>
        <Route path='/research' element={<Research/>}/>
        <Route path='/results' element={<Results/>}/>
        <Route path='/faq' element={<Faq/>}/>
        <Route path='/whyUs' element={<WhyUs/>}/>
        <Route path='/student/login' element={<WhyUs/>}/>
        <Route path='/student/additionalData' element={<WhyUs/>}/>
        <Route path='/student/cart' element={<WhyUs/>}/>
        <Route path='/student/credentials' element={<WhyUs/>}/>
        <Route path='/student/dashboard' element={<WhyUs/>}/>
        <Route path='/student/login' element={<WhyUs/>}/>
        <Route path='/student/chat' element={<WhyUs/>}/>
        <Route path='/student/signup' element={<WhyUs/>}/>
        <Route path='/student/personalData' element={<WhyUs/>}/>
        <Route path='/institution/login' element={<WhyUs/>}/>
        <Route path='/institution/signup' element={<WhyUs/>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
