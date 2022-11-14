import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Home from "./pages/Home";

import Place from "./pages/Place";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/place" element={<Place />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
