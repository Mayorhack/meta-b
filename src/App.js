import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import Place from "./pages/Place";
import Layout from "./layout/Layout";
import ScrollToTop from "./layout/ScrollToTop";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route exact path="" element={<Home />} />
              <Route path="place" element={<Place />} />
            </Route>
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
