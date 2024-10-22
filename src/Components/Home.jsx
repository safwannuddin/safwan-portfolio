import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";


const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-height" style={{ position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "15rem", left: "2rem", width: "10rem" }}>
        <h1>{name}</h1>
        <h2>{title}</h2>
      </div>
      <div
        style={{ position: "absolute", bottom: "3rem", left: "50%", transform: "translateX(-50%)" }}
      >
        <img src={arrowSvg} style={{ height: "3rem", width: "3rem" }} alt="Down arrow" />
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
