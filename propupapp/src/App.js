import React, { Component } from "react";
import Router from "./components/routes/Router";
import Navbar from "./components/toolbar/Navbar";
import Footer from "./components/footer/Footer";
import { BrowserRouter } from "react-router-dom";
import '../src/index.css';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="page-container">
        <div className="content-wrap">
          <Navbar />
          
          <BrowserRouter>
            <Router />
          </BrowserRouter>  
        </div>
          <Footer className="page-footer"/>    
      </div>
   );
  }
}

export default App;