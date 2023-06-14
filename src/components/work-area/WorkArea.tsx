import './styles';
import Sidebar from '../sidebar/Sidebar';
import CanvasBoard from '../canvas-board/CanvasBoard';
import { fabric } from "fabric";
import { useState, useEffect } from "react";
import { addRect, addCircle, addTriangle, addText, addImg } from './fabricMethods';

const WorkArea = () => {
    const [canvas, setCanvas] = useState("");
    const [imgURL, setImgURL] = useState('');

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
        <section className="work-area">
            <div className="work-area__container">
                <div className="work-area__wrapper">
                    <Sidebar 
                        canvas={canvas} 
                        addRect={addRect} 
                        addCircle={addCircle} 
                        addTriangle={addTriangle} 
                        addText={addText}
                        imgURL={imgURL}
                        setImgURL={setImgURL}
                        addImg={addImg}
                    ></Sidebar>
                    <CanvasBoard></CanvasBoard>
                </div>
            </div>
        </section>)
}

export default WorkArea