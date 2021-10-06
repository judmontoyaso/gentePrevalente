import { useModal } from "Hooks/useModal";
import React from "react";
import Modal from "./Modal";
import { saveAs } from "file-saver";

const saveFile = () => {
  saveAs(
    "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    "Documento"
  );
};

const Modals = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);

  return (
    <div>
      <button onClick={openModal1}>
        <section className=" flex border-solid m-10 mt-3  border-1 border-gray-500 rounded-lg h-12 w-56 p-2 cursor-pointer  clipAdobe">
          <i className="fas fa-paperclip text-blue-500 align-middle fa-2x clipp"></i>{" "}
          <span className="flex align-middle font-black ml-1">
            Ver archivos adjuntos
          </span>
        </section>
      </button>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <h3>
          {" "}
          <section className="flex items-center flex-col">
            <h3 className="text-black font-extrabold mb-10 mt-10">
              Documentos Cargados
            </h3>
            <section className="items-center  mb-6">
              <button onClick={saveFile}>
              <span className="align-middle mr-10">RUT PrevalentWare</span>
                <i className="fas fa-file-pdf fa-3x text-red-600 align-middle"></i>
              </button>
            </section>
            <section className="items-center mb-6">
              <button onClick={saveFile}>
              <span className="align-middle mr-10">RUT PrevalentWare</span>
                <i className="fas fa-file-pdf fa-3x text-red-600 align-middle"></i>
              </button>
            </section>
            <section className="items-center mb-6">
              <button onClick={saveFile}>
              <span className="align-middle mr-10">RUT PrevalentWare</span>
                <i className="fas fa-file-pdf fa-3x text-red-600 align-middle"></i>
              </button>
            </section>
            <section className="items-center mb-6">
              <button onClick={saveFile}>
              <span className="align-middle mr-10">RUT PrevalentWare</span>

                <i className="fas fa-file-pdf fa-3x text-red-600 align-middle"></i>
              </button>
            </section>
            <section className="items-center mb-6">
              <button onClick={saveFile}>
              <span className="align-middle mr-10">RUT PrevalentWare</span>
                <i className="fas fa-file-pdf fa-3x text-red-600 align-middle"></i>
              </button>
            </section>
          </section>
        </h3>
      </Modal>
    </div>
  );
};

export default Modals;
