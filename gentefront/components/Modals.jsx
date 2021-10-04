import { useModal } from "Hooks/useModal";
import React from "react";
import Modal from "./Modal";

const Modals = () => {

    const[isOpenModal1, openModal1, closeModal1] = useModal(false);


  return (
    <div>
      <button onClick={openModal1}><section className=" flex border-solid m-10 mt-3  border-1 border-gray-500 rounded-lg h-12 w-56 p-2 cursor-pointer  clipAdobe">
                  <i class="fas fa-paperclip text-blue-500 align-middle fa-2x clipp"></i>{" "}
                  <span className="flex align-middle font-black ml-1">
                    Ver archivos adjuntos
                  </span>
                </section></button>
      <Modal isOpen= {isOpenModal1} closeModal={closeModal1}>
        <h3>
          <p>
            {" "}
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
              <section className="items-center mb-6">
                <span className="align-middle mr-10">RUT PrevalentWare</span>
                <i class="fas fa-file-pdf fa-3x text-red-600 align-middle"></i>
              </section>
            </section>
          </p>
        </h3>
      </Modal>
    </div>
  );
};

export default Modals;
