import './styles';
import Sidebar from '../sidebar/Sidebar';
import CanvasBoard from '../canvas-board/CanvasBoard';
import { fabric } from "fabric";
import { useState, useEffect } from "react";
import { addRect, addCircle, addTriangle, addText, addImg } from './fabricMethods';

const WorkArea = (props) => {
    const [imgURL, setImgURL] = useState('');

 

    return (
        <section className="work-area">
            <div className="work-area__container">
                <div className="work-area__inner">
                    <Sidebar 
                        canvas={props.canvas} 
                        addRect={addRect} 
                        addCircle={addCircle} 
                        addTriangle={addTriangle} 
                        addText={addText}
                        imgURL={imgURL}
                        setImgURL={setImgURL}
                        addImg={addImg}
                   
                    ></Sidebar>
                    <CanvasBoard canvas={props.canvas}></CanvasBoard>
                </div>
            </div>
        </section>)
}

export default WorkArea