import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'
import Header from "./Header"
import Footer from "./Footer"
import MainPage from "./MainPage"
import { Router, Routes, Route, Link} from 'react-router-dom'
import NewLetter from "./componets/Newsletter.jsx";
import NewBlog from './componets/Posts.jsx'

function App() {
  return (
    <>
    <div>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/create-post" element={<NewLetter />} />
          <Route path="/post-page" element={<NewBlog />} />
        </Routes>
        <Footer />
    </div>
        
    
    </>
  );
}

  
  export default App;



