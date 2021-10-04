import React from "react";
import { Layout } from "components/Layout";
import Link from "next/link";
import Modals from "components/Modals";

const DesktopComponent = () => (
  <div>
    <Layout>
      {/* contenedores global, de formulario y de imagen logo*/}

      <section className="mt-10 ml-10">
        <Link href="/">
          <a>
            <span className="font-bold text-blue-500 text-2xl">
              Administracion /
            </span>
          </a>
        </Link>
        <span className="font-bold text-2xl"> Aprobación de empresas</span>
      </section>

      <section className="contenedor mt-20 m-auto flex flex-col">
        <section className="formContenedor m-auto">
          <section className="contenedorDatos  m-auto">
            <form>
              <section className="gestionar">
                <section className=" flex border-solid m-10 mt-3  border-1 border-gray-500 rounded-lg  p-2 cursor-pointer botonesGestion">
                  <i class="fas fa-check-circle fa-2x ml-1 check"></i>{" "}
                  <span className="flex font-black ml-1">Aprobar Empresa</span>
                </section>
                <section className=" flex border-solid m-10 mt-3  border-1 border-gray-500 rounded-lg  p-2 cursor-pointer botonesGestion">
                  <i class="fas fa-times-circle text-red-600 fa-2x ml-1"></i>{" "}
                  <span className="flex font-black ml-1">Rechazar Empresa</span>
                </section>
              </section>
              <section className="contenedorLogoEmpresa flex mt-20 m-auto "></section>

              {/* formulario input */}

              <section className="m-auto grid grid-cols-2 ml-16">
                <section>
                  <label className="text-gray-600 m-9">
                    Nombre de la empresa
                  </label>
                  <input className="border-solid m-10 mt-3 border-b-2 border-gray-500"></input>
                </section>
                <section>
                  <label className="text-gray-600 m-9">Razón social</label>
                  <input className="border-solid m-10 mt-3  border-b-2 border-gray-500"></input>
                </section>
                <section>
                  <label className="text-gray-600 m-9">
                    Tipo de identificación
                  </label>
                  <input className="border-solid m-10 mt-3  border-b-2 border-gray-500"></input>
                </section>
                <section>
                  <label className="text-gray-600 m-9">Identificación</label>
                  <input className="border-solid m-10 mt-3  border-b-2 border-gray-500"></input>
                </section>
                <section>
                  <label className="text-gray-600 m-9"># de empleados</label>
                  <input className="border-solid m-10 mt-3  border-b-2 border-gray-500"></input>
                </section>
              </section>
            </form>
            <Modals></Modals>
          </section>
        </section>

        <section className="botonesControl m-auto">
          <i class="fas fa-chevron-circle-left text-gray-500 fa-2x"></i>

          <span className="text-gray-500 p-8 text-2xl">
            {" "}
            Empresa 1 de 2 pendiente de aprobación
          </span>

          <i className="fas fa-chevron-circle-right fa-2x"></i>
        </section>
      </section>
    </Layout>
  </div>
);

export default DesktopComponent;
