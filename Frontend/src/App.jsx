import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'

import { Router, Route} from 'react-router-dom';
import Header from './Header.jsx';
import MainPage from './MainPage.jsx';
import Footer from './Footer.jsx';
import PostPage from './PostPage.jsx'

function App() {
  return (
    <Router>
      
        <Route path="/" component={MainPage} />
        <Route path="/PostPage" component={PostPage} />
      
    </Router>
  );
}

  
  export default App;



