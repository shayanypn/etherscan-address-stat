import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';

interface ModalProps {
  className?: string;
  portalNodeId?: string;
  onClose: () => void;
  active: boolean;
}

const Modal: React.FC<ModalProps> = ({
  children,
  className = '',
  portalNodeId,
  active = false,
  onClose,
}) => {
  const modal = (
    <div className={`custom-modal ${className} ${active ? 'active' : ''}`}>
      <div className="custom-modal-body">
        <button
          type="button"
          className="close"
          aria-label="Close"
          onClick={onClose}
        >
          <span aria-hidden="true">&times;</span>
        </button>
        <div className="custom-modal-body-content">{children}</div>
      </div>
    </div>
  );

  // this option give access to component for rendering in another node
  if (portalNodeId) {
    const portalNode: HTMLElement | null = document.getElementById(
      portalNodeId
    );
    if (portalNode) {
      return ReactDOM.createPortal(modal, portalNode);
    }
  }
  return modal;
};

export default Modal;
