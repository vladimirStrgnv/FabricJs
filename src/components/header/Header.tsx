import './styles';
import Modal from '../modal/Modal';
import { useState, useEffect } from "react";

interface HeaderProps {
  canvas: fabric.Canvas
}

const Header = ({canvas}: HeaderProps) => {
  const [modalActive, setModalActive] = useState(false);
  const [svg, setSvgCode] = useState('');

  return (
    <>
      <header className="header">
        <div className="header__container">
          <div className="header__inner">
            <button
              className="header__get-svg-btn"
              onClick={() => {setModalActive(!modalActive); setSvgCode(canvas.toSVG())}}
            >
              Get svg code
            </button>
          </div>
        </div>
      </header>
      <Modal active={modalActive} setActive={setModalActive} text={svg} callback={() => {navigator.clipboard.writeText(svg)}}></Modal>

    </>
  );
};

export default Header;