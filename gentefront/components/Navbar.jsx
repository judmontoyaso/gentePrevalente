import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "media/logo.png";
import { useState } from "react";

//hook de usestate para activar hamburguer

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      {/* navbar */}

      <nav className="flex items-center p-3 colorNav">
        <Link href="/">
          {/* logo*/}
          <a className="inline-flex items-center p-1 pl-10 mr-4 ">
            <Image src={logo} alt="logo" width={80} height={80} />
            <span className="text-xl text-white font-bold uppercase tracking-wide">
              Gente Prevalente
            </span>
          </a>
        </Link>
        {/* hamburguer*/}
        <button
          className=" inline-flex p-3  hover:bg-yellow-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none
        "
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* vista de ordenador */}

        <div
          className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="lg:inline-flex lg:flex-row lg:inset-10  w-full lg:items-center items-start  flex flex-col lg:h-auto justify-between">
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3   py-2 rounded text-white text-2xl  items-center justify-center hover:bg-yellow-600 hover:text-white ">
                <i className="fas fa-search mr-4"></i>Buscar
              </a>
            </Link>
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white text-2xl  items-center justify-center hover:bg-yellow-600 hover:text-white">
                <i className="fas fa-cogs mr-4"></i>Administracion
              </a>
            </Link>
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white text-2xl  items-center justify-center hover:bg-yellow-600 hover:text-white">
                <i className="fas fa-suitcase mr-4"></i>Empleo
                <i className="fas fa-chevron-down ml-4"></i>
              </a>
            </Link>
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white text-2xl  items-center justify-center hover:bg-yellow-600 hover:text-white">
                <i className="fas fa-clipboard-list mr-4"></i> Mi CV
              </a>
            </Link>
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white text-2xl items-center justify-center hover:bg-yellow-600 hover:text-white">
                <i className="fas fa-circle mr-4 fa-2x text-gray-500"></i> Usuario
                <i className="fas fa-chevron-down ml-4"></i>
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
