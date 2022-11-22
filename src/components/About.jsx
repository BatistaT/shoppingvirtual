import React from "react";
import about from "../assets/sobre.jpg";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-dark fw-bold mb-4">Sobre nós</h1>
            <p className="lead mb-4">
             Este shopping virtual foi desenvolvido como testes!
              <br />
              <br />
             Foi utilizado JavaScript, CSS, e HTML em sua construção, o código permanece em aberto para desenvolvimento e livre para ser baixado!
            </p>
            <NavLink to="/contact" className="btn btn-outline-dark px-3">
              Fale conosco!
            </NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img src={about} alt="About Us" width="600px" height="400px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
