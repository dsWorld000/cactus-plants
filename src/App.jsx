import React, {useState} from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import News from "./pages/News/News";
import Care from "./pages/Care/Care";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import Cart from "./pages/Cart/Cart";

function App() {

  const[showLogin, setShowLogin] = useState(false)

  return (
    <>
    {showLogin? <Login setShowLogin={setShowLogin} /> : <></>}
      <section>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />

          {/* <Route path="news" element={<News />} />
          <Route path="shop" element={<Shop />} />
          <Route path="care" element={<Care />} />
          <Route path="contact" element={<Contact />} /> */}
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </section>
      <Footer />
    </>
  );
}

export default App;
