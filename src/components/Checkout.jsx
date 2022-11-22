import React from "react";
import { NavLink } from "react-router-dom";

const Checkout = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-dark fw-bold mb-4">Página a ser implementada</h1>
            <p className="lead mb-4">
              Ainda em fase de desenvolvimento
            </p>
            <NavLink to="/shoppingvirtual" className="btn btn-outline-dark px-3">
              Página principal
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
