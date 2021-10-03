import Head from "next/head";
import { Navbar } from "components/Navbar";
import { Cards } from "components/Cards";

export default function Home() {
  return (
    <div className="main">
      <Head>
        <title>Gente Prevalente</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          src="https://kit.fontawesome.com/0888d5f4dd.js"
          crossorigin="anonymous"
        ></script>
      </Head>
      <Navbar />

      <section>
        <h1 className="text-center text-3xl font-bold text-gray-700">
          Gente Prevalente
        </h1>

        <ul className="ulista">
          <Cards
            nombreEmpresa="Solicitud de creacion de empresas"
            mensaje="2 solicitudes sin tratar"
            logo="fas fa-industry"
          />
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
  );
}
