import React from "react";
import "./App.css";
import sectionsData from "./Data/sectionsData";
import Nav from "./components/Nav";
import ImageSection from "./components/ImageSection";

export default function App() {
  return (
    <div className="app-container">
      <Nav />
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
