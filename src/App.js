import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './App.css';
import HomePage from "../../crickanews/src/components/Homepage"
import Series from "./components/Series";
import Videos from "./components/Videos";
import ScrollToTop from "./components/Scrollontop";
import News from "./components/news";
function App() {
  return (
    <Router>
      <div className="App bg-gray-100">
        <Navbar />
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/series" element={<Series />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/News" element={<News />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
