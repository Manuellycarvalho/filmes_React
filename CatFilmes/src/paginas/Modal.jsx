import estilos from './Modal.module.css';

export function Modal({movie, onClose}) {


    return(
      <div className={estilos.modalBackdrop} onClick={onClose}>

      </div>  
    );
}