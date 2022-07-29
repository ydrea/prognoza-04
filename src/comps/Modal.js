import ReactDom from "react-dom";

function Modal({ children, open }) {
  if (!open) return null;
  return ReactDom.createPortal(
    <div className="modal">
      {children}
      <button> OK </button>
    </div>
    // ,
    // document.getElementById("portal")
  );
}

export default Modal;
