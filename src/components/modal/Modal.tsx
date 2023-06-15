import { useState, useEffect } from 'react';
import { text } from 'stream/consumers';
import './style';

interface ModalProps {
  active: boolean;
  setActive: React.Dispatch<boolean>;
  text: string ;
  callback: any;
  alert: string
}

const Modal = ({active, setActive, text, callback, alert}: ModalProps) => {
  const [isAlertVisible, setAlertVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlertVisible(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [isAlertVisible]);

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
        <div className="modal__btn-wrapper">
          <button className='modal__btn' onClick={()=> {callback; setAlertVisible(true)}} >copy to clipboard</button>
          {isAlertVisible && <p className='modal__btn-alert'>{alert}</p>}
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
}


export default Modal;