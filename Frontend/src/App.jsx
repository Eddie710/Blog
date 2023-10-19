import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'

import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Header from './Header.jsx';
import MainPage from './MainPage.jsx';
import Footer from './Footer.jsx';
import PostPage from './PostPage.jsx'
import SignupForm from './SignUp.jsx'

function App() {
  return (
    <>
    <Header />

    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/SignUp" element={<SignupForm />} />
      </Routes>
    </Router>
    <Footer />
    </>
  );
}

  
  export default App;



