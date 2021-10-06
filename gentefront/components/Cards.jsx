import React from "react";

export const Cards = ({ nombreEmpresa, mensaje, logo }) => {
  return (
    <div>
      <li className="breedCard mb-20 ">
        <div>
          <i className={`${logo}  fa-3x text-white p-5 rounded-lg cuadro`}></i>
        </div>
        <div className="contenedorImagen">
          <span className="  ml-3 font-bold text-2xl tituloCard">
            {nombreEmpresa}
          </span>
          <section>
            <ul className="barra">
              <i className="fas fa-clock fa-2x text-gray-400  align-middle">
                {" "}
                <span className="p-2 text-gray-400 text-lg mb-36">
                  {mensaje}
                </span>
              </i>
            </ul>
          </section>
        </div>
      </li>
    </div>
  );
};
