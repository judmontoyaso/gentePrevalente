import React from "react";
import { useQuery, gql, useMutation } from "@apollo/client";
import fetch from "node-fetch";

const QUERY = gql`
  query Query {
    obtenerEmpresas {
      nombre
      identificacion
      estado
    }
  }
`;

const ELIMINAR = gql`
  mutation Mutation($eliminarEmpresaIdentificacion: Int!) {
    eliminarEmpresa(identificacion: $eliminarEmpresaIdentificacion)
  }
`;

const consulta = () => {
  
  const [eliminarEmpresa] = useMutation(ELIMINAR);
  const confirmarEliminarPredio = (identificacion) => {
    console.log("la empresa que va eliminar tiene el id:" + identificacion);

    try {
      //Eliminar por id

      const { eliminarEmpresaIdentificacion } =  eliminarEmpresa({
        variables: {
          eliminarEmpresaIdentificacion: identificacion,
        },
      });

      // mostrar alerta
      console.log("eliminado el predio: " + identificacion)
    } catch (error) {
      console.log(error);
    }
  };

  const { data, loading } = useQuery(QUERY);
  if (loading) return "wait";

  console.log(data.obtenerEmpresas[0].identificacion);

  return (
    <div>
      <section>
        {data.obtenerEmpresas.map((empresa) => (
          <button
            onClick={() =>
              confirmarEliminarPredio(empresa.identificacion)
            }
          >
            Next item
          </button>
        ))}
      </section>
    </div>
  );
};

export default consulta;
