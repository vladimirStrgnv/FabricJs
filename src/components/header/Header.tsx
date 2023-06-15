import './styles';
import Modal from '../modal/Modal';
import { useState, useEffect } from "react";

const Header = (props) => {
  const [modalActive, setModalActive] = useState(false);
  const [svg, setSvgCode] = useState('');

  return (
    <>
      <header className="header">
        <div className="header__container">
          <div className="header__inner">
            <button
              className="header__get-svg-btn"
              onClick={() => {setModalActive(!modalActive); setSvgCode(props.canvas.toSVG())}}
            >
              Get svg code
            </button>
          </div>
        </div>
      </header>
      <Modal active={modalActive} setActive={setModalActive}>
        {svg}
      </Modal>
    </>
  );
};

export default Header;