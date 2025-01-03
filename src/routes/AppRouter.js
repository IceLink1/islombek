import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Resume from "../pages/Resume";
import Projects from "../pages/Projects";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/portfolio" element={<Projects />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
