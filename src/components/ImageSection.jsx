import React from "react";
import "../App.css";

const ImageSection = ({ id, image, alt }) => (
  <div className="section" id={id}>
    <img src={image} alt={alt} className="section-image" />
  </div>
);

export default ImageSection;
