import React from 'react';
import './App.css';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
// import'bootstrap/dist/css/bootstrap.css';
// import'bootstrap/dist/css/bootstrap-theme.css';
// import Slider from "react-slick";


function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     {/* <img src={logo} className="App-logo" alt="logo" /> */}
        
    //     {/* <a
    //       className="App-link"
    //       href="https://reactjs.org"2
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a> */}
    //   <Router>
    //   <Link to="/pages">
        
    //   </Link>
    //   </Router>
    //   </header>
    //   <div>
    //   <h3 className="popular-movie-text">
    //         Popular Movie
    //   </h3>
    //   <div className="row">
    //     <Slider >
    //       <img src="https://cache.desktopnexus.com/thumbseg/2339/2339466-bigthumbnail.jpg" width="300px" height="200px"></img>
    //       <img src="https://cache.desktopnexus.com/thumbseg/2339/2339466-bigthumbnail.jpg" width="300px" height="200px"></img>
    //       <img src="https://cache.desktopnexus.com/thumbseg/2339/2339466-bigthumbnail.jpg" width="300px" height="200px"></img>
    //     </Slider>
    //   </div>
    //   </div>
    // </div>
    <div>
            <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            </ul>
            {this.props.children}
         </div>
  );
}

export default App;
