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
import Prepare from './pages/prepare/prepare';
import Online from './pages/online/Online';
import Onsite from './pages/onsite/Onsite';
import TestFormat from './pages/test_format/TestFormat';
import Institutions from './pages/institutions/Institutions';
import About from './pages/about_us/About';
import Signup from './pages/student/signup/signup';
import Success from './pages/institution/success/Success';
import AdditionalInformation from './pages/institution/additional-information/AdditionalInformation';
import Done from './pages/institution/done/Done';
import PersonalInformation from './pages/institution/personal-information/PersonalInformation';
import UsernamePassword from './pages/institution/user-pass/UsernamePassword';
import AdditionalData from './pages/student/additionaldata/additionaldata';
import PersonalData from './pages/student/personaldata/personaldata';
import UserPass from './pages/student/username-password/UserPass';
import TimeDate from './pages/student/timedate/TimeDate';
import PhotoValidation from './pages/student/photovalidation/PhotoValidation';
import PaymentPage from './pages/student/paymentpage/PaymentPage';
import PaymentCompletion from './pages/student/paymentcompletion/PaymentCompletion';

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/gate' element={<Gate/>}/>
        <Route path='/lisa' element={<Lisa/>}/>
        <Route path='/online' element={<Online/>}/>
        <Route path='/onsite' element={<Onsite/>}/>
        <Route path='/prepare' element={<Prepare/>}/>
        <Route path='/pocas' element={<Pocas/>}/>
        <Route path='/research' element={<Research/>}/>
        <Route path='/institutions' element={<Institutions/>}/>
        <Route path='/results' element={<Results/>}/>
        <Route path='/test_format' element={<TestFormat/>}/>
        <Route path='/faq' element={<Faq/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/whyUs' element={<WhyUs/>}/>
        <Route path='/institution/additional-information' element={<AdditionalInformation/>}/>
        <Route path='/institution/user-pass' element={<UsernamePassword/>}/>
        <Route path='/institution/personal-information' element={<PersonalInformation/>}/>
        <Route path='/student/signup' element={<Signup/>}/>
        <Route path='/student/additionaldata' element={<AdditionalData/>}/>
        <Route path='/student/personaldata' element={<PersonalData/>}/>
        <Route path='/student/username-password' element={<UserPass/>}/>
        <Route path='/institution/success' element={<Success/>}/>
        <Route path='/institution/done' element={<Done/>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
