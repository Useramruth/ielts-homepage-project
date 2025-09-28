import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import GetStartedPage from "./pages/GetStartedPage";

function App() {
  return (
    <Router basename="/ielts-homepage-project">
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