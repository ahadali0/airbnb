import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/layouts/footer/Footer";
import Navbar from "./components/layouts/header/Navbar";
import HotelsOrRoom from "./mainSection/HotelsOrRoom";
import Login from "./auth/Login";
import RegisterForm from "./auth/Register";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<HotelsOrRoom />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
