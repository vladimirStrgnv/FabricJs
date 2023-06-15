import { text } from 'stream/consumers';
import './style';

interface ModalProps {
  active: boolean;
  setActive: React.Dispatch<boolean>;
  text: string ;
  callback: any
}

const Modal = ({active, setActive, text, callback}: ModalProps) => {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => {
        setActive(false);
      }}
    >
      <div
        className="modal__content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className='modal__btn' onClick={callback} >copy to clipboard</button>
        <p>{text}</p>
      </div>
    </div>
  );
}


export default Modal;