import './global';
import WorkArea from "./components/work-area/WorkArea";
import Header from "./components/header/Header";
import Footer from './components/footer/Footer';
import { fabric } from "fabric";
import { useState, useEffect } from "react";

const App = () => {
  const [canvas, setCanvas] = useState("");
  const initCanvas = () => {
    const canvas = new fabric.Canvas("canvas", {
      height: 852,
      width: 1345,
      backgroundColor: "white",
    });

    canvas.on('mouse:wheel', function (opt) {
      var delta = opt.e.deltaY;
      var zoom = canvas.getZoom();
      zoom *= 0.999 ** delta;
      if (zoom > 20) zoom = 20;
      if (zoom < 0.01) zoom = 0.01;
      canvas.zoomToPoint({ x: opt.e.offsetX, y: opt.e.offsetY }, zoom);
      opt.e.preventDefault();
      opt.e.stopPropagation();
    });

    return canvas;
  }

  useEffect(() => {
    setCanvas(initCanvas());
  }, []);

  return (
    <>
      <Header  canvas={canvas}></Header>
      <WorkArea canvas={canvas}></WorkArea>
      <Footer></Footer>
    </>
  )
}

export default App