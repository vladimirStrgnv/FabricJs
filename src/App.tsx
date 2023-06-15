import './global';
import WorkArea from "./components/work-area/WorkArea";
import Header from "./components/header/Header";
import Footer from './components/footer/Footer';
import { useState, useEffect } from "react";
import { initCanvasBoard } from './fabric-js';
import 'fabric-history';
import { Canvas } from 'fabric/fabric-impl';

const App = () => {
  const [canvas, setCanvas] = useState<null | fabric.Canvas>(null);

  useEffect(() => {
    setCanvas(initCanvasBoard());
  }, []);

  return (
    <>
      <Header  canvas={canvas} ></Header>
      <WorkArea canvas={canvas} ></WorkArea>
      <Footer></Footer>
    </>
  )
}

export default App;