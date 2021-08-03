import React from "react";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { projects } from "../general";

function Portfolio() {
  return (
    <div className="card" style={{ width: "18rem" }}>
      {/* <img src="..." class="card-img-top" alt="..."> */}
      {projects.map((p) => (
        <>
          <div className="card-body">
            <h5 className="card-title">{p.name}</h5>
            <p className="card-text">{p.skills}</p>
          </div>
          <div className="card-body">
            <a href={p.url} className="card-link">Click for Repo</a>
          </div>
        </>
      ))}
    </div>
  );
}

export default Portfolio;
