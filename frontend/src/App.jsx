import { Upload } from "lucide-react";
import LandingPage from "./components/Landing";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UploadPage from "./components/Upload";
import Results from "./components/Results";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </Router>
  );
}