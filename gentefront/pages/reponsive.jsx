import * as React from "react";
import MobileComponent from "./MobileComponent";
import DesktopComponent from "./DesktopComponent";
import { useFormik, Formik } from "formik";
import { useQuery, useMutation, gql } from "@apollo/client";
import StockMobile from "./MobileStock";


//Utilizar estado para conocer el tamaño de la pantalla y definir cual componente mostrar, si el de escritorio o movil
const viewportContext = React.createContext({});

const ViewportProvider = ({ children }) => {

  
  //condicional para cuando no se carga window
  if (typeof window == "undefined") return fetch;

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

const MyComponent = () => {
  const { width } = useViewport();
  const breakpoint = 1200;

  return width < breakpoint ? <StockMobile /> : <DesktopComponent />;
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
