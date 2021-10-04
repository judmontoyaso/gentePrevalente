import * as React from "react";
import MobileComponent from "./MobileComponent";
import DesktopComponent from "./DesktopComponent";

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
