import React from "react";
import { Formik, useFormik } from "formik";
import { useQuery, useMutation, gql } from "@apollo/client";


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

const mostrarInformacion = () => {
  
  const sumar = () => {
    console.log();
    console.log(data.obtenerEmpresas[2]);

    return;
  };

  const formik = useFormik({
    initialValues: {
      nombre: "",
      identificacion: "",
      razonSocial: "",
      tipoID: "",
      numeroEmpleados: "",
      logo: "",
    },

    onSubmit: async (valores) => {
      const {
        nombre,
        razonSocial,
        tipoID,
        identificacion,
        numeroEmpleados,
        logo,
      } = valores;

      try {
        const { data } = await nuevaEmpresa({
          variables: {
            nuevaEmpresaInput: {
              nombre,
              razonSocial,
              tipoID,
              identificacion,
              numeroEmpleados,
              logo,
            },
          },
        });
        console.log(valores);
      } catch (error) {
        console.log(error);
      }
      console.log("enviando");
      console.log(valores);
    },
  });

  const { data, loading } = useQuery(QUERY);
  if (loading) return "wait";

  console.log(data.obtenerEmpresas[0]);

  let z = 0;

  let x = data.obtenerEmpresas[z];

  const obtenerEmpresas = x;

  console.log(x);

  return (
    <div>
      
            <form onSubmit={props.handleSubmit}>
              <section className="contenedorLogoEmpresa flex mt-20 m-auto "></section>

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
                  <label className="text-gray-600 m-9">Razón social</label>
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
                  <label className="text-gray-600 m-9">Identificación</label>
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
                  <label className="text-gray-600 m-9"># de empleados</label>
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
                  <label className="text-gray-600 m-9">Logo</label>
                  <input
                    className="border-opacity-50 m-10 mt-3  border-b-2 border-gray-500"
                    id="logo"
                    value={props.values.logo}
                    onChange={props.handleChange}
                  ></input>
                </section>
                <section>
                  <button type="submit">Enviar</button>
                </section>
              </section>
            </form>
          

      <button onClick={sumar}>cambiar</button>
      <section className="gestionar">
        <section className=" flex border-solid m-10 mt-3  border-1 border-gray-500 rounded-lg  p-2 cursor-pointer botonesGestion">
          <i class="fas fa-check-circle fa-2x ml-1 check"></i>{" "}
          <span className="flex font-black ml-1">Aprobar Empresa</span>
        </section>
        <section className=" flex border-solid m-10 mt-3  border-1 border-gray-500 rounded-lg  p-2 cursor-pointer botonesGestion">
          <i className="fas fa-times-circle text-red-600 fa-2x ml-1"></i>{" "}
          <span className="flex font-black ml-1">Rechazar Empresa</span>
        </section>
      </section>
    </div>
  );
};

export default mostrarInformacion;
