import { Cards } from "components/Cards";
import Link from "next/link";
import { Layout } from "components/Layout";
import { useQuery, gql } from "@apollo/client";

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

export default function Home() {
  //Prueba consulta
  //Query  para consulta
  const { data, loading } = useQuery(QUERY);
  if (loading) return "wait";
  //Tamaño del arreglo para manejar la paginación
  const tamaño = data.obtenerEmpresas.length;
  

  return (
    <div>
      <Layout>
        <div>
          <section>
            <h1 className="text-center text-3xl font-bold text-gray-700">
              Gente Prevalente
            </h1>

            <ul className="ulista">
              <Link href="/reponsive">
                <a>
                  <Cards
                    nombreEmpresa="Solicitud de creacion de empresas"
                    mensaje={`${tamaño} solicitudes sin tratar`}
                    logo="fas fa-industry"
                  />
                </a>
              </Link>
              <Cards
                nombreEmpresa="Indicadores"
                mensaje="Visitado por ultima vez: 31/10/2021"
                logo="fas fa-chart-bar"
              />
              <Cards
                nombreEmpresa="Inscripcion de empleados"
                mensaje="3 usuarios sin empresa registrada"
                logo="fa fa-user-tie"
              />
              <Cards
                nombreEmpresa="gestión de usuarios"
                mensaje="532 usuarios activos en la plataforma"
                logo="fa fa-users-cog"
              />
            </ul>
          </section>
        </div>
      </Layout>
    </div>
  );
}
