import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import classes from "./Modal.module.css";
const Modal = ({ children, open, closeModal }) => {
  const dialogRef = useRef();

  useEffect(() => {
    if (dialogRef) {
      if (open) {
        dialogRef.current.showModal();
      } else {
        dialogRef.current.close();
      }
    }
  }, [open]);

  const handleClickBackdrop = (event) => {
    if (event.target === dialogRef.current) {
      closeModal();
    }
  };
  return (
    <>
      {createPortal(
        <dialog ref={dialogRef} onClose={closeModal} className={classes.modal} onMouseDown={(event) => handleClickBackdrop(event)}>
          {children}
        </dialog>,
        document.getElementById("modal")
      )}
    </>
  );
};

export default Modal;
