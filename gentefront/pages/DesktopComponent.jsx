import React from "react";
import { Layout } from "components/Layout";
import Link from "next/link";
import Modals from "components/Modals";
import { mostrarInformacion } from "components/mostrarInformacion";
import { Formik, useFormik } from "formik";
import { useQuery, gql } from "@apollo/client";
import Image from "next/image";
import { useState, useEffect } from "react";

const QUERY = gql`
  query Query {
    obtenerEmpresas {
      nombre
      razonSocial
      tipoID
      identificacion
      numeroEmpleados
      logo
      estado
    }
  }
`;

const DesktopComponent = () => {
  //contador de posiciones en el arreglo

  const [count, setCount] = useState(0);
  const [limit, setlimit] = useState(0);
  const [disableNext, setDisableNext] = useState(false);
  const [disable, setDisable] = useState(false);
  const [onehabilita, setOnehabilita] = useState(true);

  //defimir el limite para la paginacion

  useEffect(() => {
    if (count == 0) {
      setlimit(tamaño);
    }
  });

  //Use effect para desactivar o activar botones de paginacion
  useEffect(() => {
    if (count == 0) {
      setDisable(true);
    }

    if (count != 0) {
      setDisable(false);
    }

    if (count == limit - 1) {
      setDisableNext(true);
    }

    if (count != limit - 1) {
      setDisableNext(false);
    }
  });

  //Query  para consulta
  const { data, loading } = useQuery(QUERY);
  if (loading) return "wait";

  console.log(data.obtenerEmpresas[0]);

  //Tamaño del arreglo para manejar la paginación
  const tamaño = data.obtenerEmpresas.length;

  //Definir valores para mostrar una posicion especifica del arreglo de datos
  let y = count;

  let x = data.obtenerEmpresas[y];

  const obtenerEmpresas = x;
  console.log(count);
  console.log(limit);

  return (
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
          <section className="formContenedor p- m-auto">
            <section className="contenedorDatos  m-auto">
              {/* 
              componente formik para manejar valores en el formulario */}

              <Formik
                enableReinitialize
                initialValues={obtenerEmpresas}
                onSubmit={(valores) => {
                  console.log("enviando");
                }}
              >
                {(props) => {
                  return (
                    <form onSubmit={props.handleSubmit}>
                      <section className="gestionar">
                        <button
                          className=" flex border-solid m-10 mt-3  border-1 border-gray-500 rounded-lg  p-2 cursor-pointer botonesGestion"
                          type="submit"
                        >
                          <i class="fas fa-check-circle fa-2x ml-1 check"></i>{" "}
                          <span className="flex font-black ml-1">
                            Aprobar Empresa
                          </span>
                        </button>
                        <button
                          className=" flex border-solid m-10 mt-3  border-1 border-gray-500 rounded-lg  p-2 cursor-pointer botonesGestion"
                          type="submit"
                        >
                          <i className="fas fa-times-circle text-red-600 fa-2x ml-1"></i>{" "}
                          <span className="flex font-black ml-1">
                            Rechazar Empresa
                          </span>
                        </button>
                      </section>

                      <section className="contenedorLogoEmpresa flex mt-20 m-auto ">
                        <Image
                          src={props.values.logo}
                          alt="logo"
                          width={250}
                          height={80}
                        />
                      </section>

                      {/* formulario input */}

                      <section className="m-auto grid grid-cols-2 ml-16">
                        <section>
                          <label className="text-gray-600 m-9">
                            Nombre de la empresa
                          </label>
                          <input
                            className="border-opacity-50 m-10 mt-3 border-b-2 border-gray-500"
                            id="nombre"
                            value={props.values.nombre}
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                          ></input>
                        </section>
                        <section>
                          <label className="text-gray-600 m-9">
                            Razón social
                          </label>
                          <input
                            className="border-opacity-50 m-10 mt-3  border-b-2 border-gray-500"
                            id="razonSocial"
                            value={props.values.razonSocial}
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                          ></input>
                        </section>
                        <section>
                          <label className="text-gray-600 m-9">
                            Tipo de identificación
                          </label>
                          <input
                            className="border-opacity-50 m-10 mt-3  border-b-2 border-gray-500"
                            id="tipoID"
                            value={props.values.tipoID}
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                          ></input>
                        </section>
                        <section>
                          <label className="text-gray-600 m-9">
                            Identificación
                          </label>
                          <input
                            className="border-opacity-50 m-10 mt-3  border-b-2 border-gray-500"
                            id="identificacion"
                            type="number"
                            value={props.values.identificacion}
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                          ></input>
                        </section>

                        <section>
                          <label className="text-gray-600 m-9">
                            # de empleados
                          </label>
                          <input
                            className="border-opacity-50 m-10 mt-3  border-b-2 border-gray-500"
                            id="numeroEmpleados"
                            type="string"
                            value={props.values.numeroEmpleados}
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                          ></input>
                        </section>
                        <section>
                          <input
                            className="border-opacity-50 m-10 mt-3  border-b-2 border-gray-500"
                            id="estado"
                            type="string"
                            value={props.values.estado}
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                          ></input>
                        </section>
                      </section>
                    </form>
                  );
                }}
              </Formik>
              <section>
                <Modals />
              </section>
            </section>
          </section>
        </section>

        {/* Botones de navegacion paginacion formulario */}

        <section className="botonesControl align-middle justify-center flex">
          <button disabled={disable} onClick={() => setCount(count - 1)}>
            <i className="fas fa-chevron-circle-left text-gray-500 fa-2x">-</i>
          </button>
          <span className="text-gray-500 p-8 text-2xl">
            {" "}
            Empresa {count + 1} de {tamaño} pendiente de aprobación
          </span>
          <button
            disabled={disableNext}
            onClick={() => {
              setCount(count + 1);
            }}
          >
            <i className="fas fa-chevron-circle-right fa-2x">+</i>
          </button>
        </section>
      </Layout>
    </div>
  );
};

export default DesktopComponent;
