import React from "react"

const Modal = ({ children, show, width }) => {
  return (
    <div
      className={
        show
          ? "modal cursor-default w-screen h-screen inset-0 fixed bg-[#00000080] z-50"
          : "hidden"
      }
    >
      <div
        className={
          show ? "modal__overlay w-screen h-screen inset-0 fixed" : "hidden"
        }
      >
        <div
          className={
            show
              ? `modal-content absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 overflow-auto rounded-3xl ${width}`
              : "hidden"
          }
        >
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal
