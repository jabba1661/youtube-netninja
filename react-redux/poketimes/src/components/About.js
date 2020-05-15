import React from "react";
import Rainbow from "../hoc/Rainbow";

const About = () => {
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <p>
        About Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Praesentium, illo consequuntur unde voluptate aut incidunt corporis
        totam qui dolorum. Id.
      </p>
    </div>
  );
};

export default Rainbow(About);
