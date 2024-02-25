import React from "react";
import "./home.css";
const Home = () => {
  return (
    <div
      className="homeMain"
      style={{
        textAlign: "center",
        fontWeight: 800,
        // padding: "10px 30px",
        color: "#61677A",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
      }}
    >
      <h1>
        Welcome aboard! Let's navigate your tasks together on this journey.
      </h1>
    </div>
  );
};

export default Home;
