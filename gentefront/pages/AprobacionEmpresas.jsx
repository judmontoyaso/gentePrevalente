import React from "react";

import { Layout } from "components/Layout";
import { fromJSON } from "postcss";

const AprobacionEmpresas = () => {
  return (
    <div>
      <Layout>
        <section className="mt-10 ml-10">
          <span className="font-bold text-blue-500 text-2xl">
            Administracion /
          </span>
          <span className="font-bold text-2xl"> Aprobación de empresas</span>
        </section>
        <section className="contenedor mt-20 m-auto flex flex-col">
          
          <section className="formContenedor m-auto">
          <section className="contenedorLogoEmpresa flex mt-20 m-auto "></section>
            <form>
              <input></input>
            </form>
          </section>
          <section className="botonesControl m-auto">
            <i class="fas fa-chevron-circle-left text-gray-500 fa-2x"></i>
            <span className="text-gray-500 p-8 text-2xl">
              {" "}
              Empresa 1 de 2 pendiente de aprobación
            </span>
            <i class="fas fa-chevron-circle-right fa-2x"></i>
          </section>
        </section>
      </Layout>
    </div>
  );
};

export default AprobacionEmpresas;
