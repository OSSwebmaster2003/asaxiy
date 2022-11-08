import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./common/header/Header";
import Home from "./pages/Home";
import Footer from "./common/footer/Footer";
import Favourites from "./pages/Favourites";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
