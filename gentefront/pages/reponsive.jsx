import * as React from "react";
import { Layout } from "components/Layout";
import Link from "next/link";

const viewportContext = React.createContext({});

const ViewportProvider = ({ children }) => {
  //condicional para cuando no se carga window
  if (typeof window == "undefined") return "cargando...";

  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);
  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <viewportContext.Provider value={{ width, height }}>
      {children}
    </viewportContext.Provider>
  );
};

const useViewport = () => {
  const { width, height } = React.useContext(viewportContext);
  return { width, height };
};

/* Codigo responsive para moviles */

const MobileComponent = () => (
  <div className="flex flex-col">
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

      <section className="contenedorMobile mt-20 m-auto flex flex-col">
        <section className="botonesControl m-auto">
          <i class="fas fa-chevron-circle-left text-gray-500 fa-2x"></i>

          <span className="text-gray-500 p-8 text-2xl">
            {" "}
            Empresa 1 de 2 pendiente de aprobación
          </span>

          <i className="fas fa-chevron-circle-right fa-2x"></i>
        </section>
        <section className="formContenedorMobile items-center">
          <form className="flex items-center flex-col">
            <section className="contenedorLogoEmpresaMobile flex mt-20"></section>

            {/* formulario input */}

            <section className="m-auto flex flex-col">
              <section>
                <label className="text-gray-600 m-9">
                  Nombre de la empresa
                </label>
              </section>
              <section>
                <input className="border-solid m-10 mt-3 border-b-2 border-gray-500"></input>
              </section>
              <section>
                <label className="text-gray-600 m-9">Razón social</label>
              </section>
              <section>
                <input className="border-solid m-10 mt-3  border-b-2 border-gray-500"></input>
              </section>
              <section>
                <label className="text-gray-600 m-9">
                  Tipo de identificación
                </label>
              </section>
              <section>
                <input className="border-solid m-10 mt-3  border-b-2 border-gray-500"></input>
              </section>
              <section>
                <label className="text-gray-600 m-9">Identificación</label>
              </section>
              <section>
                <input className="border-solid m-10 mt-3  border-b-2 border-gray-500"></input>
              </section>
              <section>
                <label className="text-gray-600 m-9"># de empleados</label>
              </section>
              <section>
                <input className="border-solid m-10 mt-3  border-b-2 border-gray-500"></input>
              </section>
            </section>
          </form>

          {/* Documentos Adjuntos */}

          <section className="flex items-center flex-col">
            <h3 className="text-black font-extrabold mb-10 mt-10">
              Documentos Cargados
            </h3>
            <section className="items-center  mb-6">
              <span className="align-middle mr-10">RUT PrevalentWare</span>
              <i class="fas fa-file-pdf fa-3x text-red-600 align-middle"></i>
            </section>
            <section className="items-center mb-6">
              <span className="align-middle mr-10">RUT PrevalentWare</span>
              <i class="fas fa-file-pdf fa-3x text-red-600 align-middle"></i>
            </section>
            <section className="items-center mb-6">
              <span className="align-middle mr-10">RUT PrevalentWare</span>
              <i class="fas fa-file-pdf fa-3x text-red-600 align-middle"></i>
            </section>
            <section className="items-center mb-6">
              <span className="align-middle mr-10">RUT PrevalentWare</span>
              <i class="fas fa-file-pdf fa-3x text-red-600 align-middle"></i>
            </section>
          </section>
        </section>
      </section>

      {/*      Botones de agregar y rechazar */}
      <section className="flex items-center flex-col">
        <section className=" flex border-solid m-10 mt-3  border-1 border-gray-500 rounded-lg  p-2 cursor-pointer botonesGestion">
          <i class="fas fa-check-circle fa-2x ml-1 check"></i>{" "}
          <span className="flex font-black ml-1">Aprobar Empresa</span>
        </section>
        <section className=" flex border-solid m-10 mt-3  border-1 border-gray-500 rounded-lg  p-2 cursor-pointer botonesGestion">
          <i class="fas fa-times-circle text-red-600 fa-2x ml-1"></i>{" "}
          <span className="flex font-black ml-1">Rechazar Empresa</span>
        </section>
      </section>
    </Layout>
  </div>
);

//Codigo para pantalla desktop
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
                <section className=" flex border-solid m-10 mt-3  border-1 border-gray-500 rounded-lg h-12 w-56 p-2 cursor-pointer  clip">
                  <i class="fas fa-paperclip text-blue-500 align-middle fa-2x clipp"></i>{" "}
                  <span className="flex align-middle font-black ml-1">
                    Ver archivos adjuntos
                  </span>
                </section>
              </section>
            </form>
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

const MyComponent = () => {
  const { width } = useViewport();
  const breakpoint = 1200;

  return width < breakpoint ? <MobileComponent /> : <DesktopComponent />;
};

const reponsive = () => {
  return (
    <div>
      <ViewportProvider>
        <MyComponent />
      </ViewportProvider>
    </div>
  );
};

export default reponsive;
