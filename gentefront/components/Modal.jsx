import React from "react";

const Modal = ({ children, isOpen, closeModal }) => {
  const handleModalContainerClick = (e) => e.stopPropagation();
  return (
    (
      <div>
        <article className={`modal ${isOpen && "is-open" }  `}>
          <div className="modal-container" onClick={handleModalContainerClick}>
            <button class="modal-close" onClick={closeModal}>
              X
            </button>
            {children}
          </div>
        </article>
      </div>
    )
   
  );
};

export default Modal;
