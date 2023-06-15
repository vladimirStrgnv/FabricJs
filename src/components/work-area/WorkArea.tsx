import './styles';
import Sidebar from '../sidebar/Sidebar';
import CanvasBoard from '../canvas-board/CanvasBoard';
import { useState } from "react";

interface WorkAreaProps {
    canvas: fabric.Canvas; 
}

const WorkArea = ({canvas}:WorkAreaProps) => {
    const [imgURL, setImgURL] = useState('');

    return (
        <section className="work-area">
            <div className="work-area__container">
                <div className="work-area__inner">
                    <Sidebar 
                        canvas={canvas} 
                        imgURL={imgURL}
                        setImgURL={setImgURL}

                    ></Sidebar>
                    <CanvasBoard ></CanvasBoard>
                </div>
            </div>
        </section>)
}

export default WorkArea