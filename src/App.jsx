import React from "react";
import Navbar from "./components/NavBar";
import ImageSection from "./components/ImageSection";
import sectionsData from "./Data/sectionsData";
import "./App.css";

export default function App() {
  return (
    <div className="app-container">
      <Navbar />
      {sectionsData.map((section) => (
        <ImageSection
          key={section.id}
          id={section.id}
          image={section.image}
          alt={section.alt}
        />
      ))}
    </div>
  );
}
