import React from "react";
import "./styles.css";

export default function Card({ vehicle }) {
  const { title, rating, desc, img } = vehicle;
  return (
    <div className="card">
      <div className="content">
        <h3>{title}</h3>
        <small>{rating}/5</small>
        <p>{desc}</p>
      </div>
      <div>
        <img src={img} alt="vehicle" className="img" />
      </div>
    </div>
  );
}
