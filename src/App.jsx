import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";
import GetStartedPage from "./pages/GetStartedPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Features />
              <Testimonials />
              <Footer />
            </>
          }
        />
        <Route path="/get-started" element={<GetStartedPage />} />
      </Routes>
    </Router>
  );
}

export default App;