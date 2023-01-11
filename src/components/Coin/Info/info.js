import React from "react";
import "./styles.css";
function Info({ name, desc }) {
  return (
    <div className="grey-container" style={{ padding: "1rem" }}>
      <h3 style={{ marginTop: "0rem" }}>{name}</h3>
      <p className="desc-links" dangerouslySetInnerHTML={{ __html: desc }} />
    </div>
  );
}

export default Info;