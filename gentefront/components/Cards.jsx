import React from "react";

export const Cards = ({ nombreEmpresa, mensaje, logo }) => {
  return (
    <div>
      <li className="breedCard">
        <div>
          <i
            className={`${logo}  fa-5x text-white p-8 rounded-lg cuadro`}
          ></i>
        </div>
        <div className="contenedorImagen">
          <span className="m-auto font-bold text-4xl tituloCard">
            {nombreEmpresa}
          </span>
        </div>

        <ul className="barra">
          <li>
            <i className="fas fa-clock fa-3x text-gray-400"></i>
            <span className="p-10 text-gray-400 text-2xl ">{mensaje}</span>
          </li>
        </ul>
      </li>
    </div>
  );
};
