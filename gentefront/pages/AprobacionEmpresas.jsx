import React from "react";

import { Layout } from "components/Layout";
import { fromJSON } from "postcss";

const AprobacionEmpresas = () => {
  return (
    <div>
      <Layout>
        <section className="mt-10 ml-10">
          <span className="font-bold text-blue-500 text-2xl">
            Administracion/
          </span>
          <span className="font-bold text-2xl">Aprobación de empresas</span>
        </section>
        <section className="contenedor mt-20 m-auto">
          <section className="formContenedor m-auto">
            <form>
              <input></input>
            </form>
          </section>
        </section>
      </Layout>
    </div>
  );
};

export default AprobacionEmpresas;
