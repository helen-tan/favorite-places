import React from 'react'
import ReactDOM from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import Backdrop from './Backdrop'
import "./Modal.css"

// Component for internal use: not exported but will be used by 'Modal'
const ModalOverlay = props => {
  const content = (
    <div className={`modal ${props.className}`} style={props.style}>
      <header className={`modal__header ${props.headerClass}`}>
        <h2>{props.header}</h2>

        <form onSubmit = {props.onSubmit ? props.onSubmit : (event) => event.preventDefault()}>
          {/* User can inject the contents/inputs of a form */}
          <div className={`modal__content ${props.contentClass}`}>
            {props.children}
          </div>
          {/* User can inject the submit buttons of a form */}
          <footer className={`modal__footer ${props.footerClass}`}>
            {props.footer}
          </footer>
        </form>
      </header>
    </div>
  )

  return ReactDOM.createPortal(content , document.getElementById('modal-hook'))
}

const Modal = props => {
  return (
    <>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames='modal'
      >
        {/* Take the props passed in to Modal and forward them to ModalOverlay */}
        <ModalOverlay {...props} />
      </CSSTransition>
    </>
  )
}

export default Modal
