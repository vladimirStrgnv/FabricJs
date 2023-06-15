// @ts-nocheck
import './style';
import { useState } from 'react';
import { addRect, addCircle, addTriangle, addText, addImg, addLine } from '../../fabric-js/index';

interface SidebarProps {
    canvas: fabric.Canvas;
    imgURL: string;
    setImgURL: React.Dispatch<string>;
}

const Sidebar = ({canvas, imgURL, setImgURL}:SidebarProps) => {
    const [isVisible, setVisible] = useState(false);

    return (
        <div className="sidebar">
            <div className='sidebar__tools-wrapper'>
                <div className="sidebar__btn-wrapper">
                    <button className="sidebar__add-rectangle-btn" onClick={() => addRect(canvas)} onContextMenu={(e) => e.preventDefault()}></button>
                </div>
                <div className="sidebar__btn-wrapper">
                    <button className="sidebar__add-circle-btn" onClick={() => addCircle(canvas)} onContextMenu={(e) => e.preventDefault()}></button>
                </div>
                <div className="sidebar__btn-wrapper">
                    <button className="sidebar__add-trinagle-btn" onClick={() => addTriangle(canvas)} onContextMenu={(e) => e.preventDefault()}></button>
                </div>
                <div className="sidebar__btn-wrapper">
                    <button className="sidebar__add-text-btn" onClick={() => addText(canvas)} onContextMenu={(e) => e.preventDefault()}></button>
                </div>
                <div className="sidebar__btn-wrapper">
                    <button className="sidebar__add-line-btn" onClick={() => addLine(canvas)} onContextMenu={(e) => e.preventDefault()}></button>
                </div>
                <div className="sidebar__btn-wrapper">
                    <button 
                        className="sidebar__add-img-btn" 
                        onClick={(e) => { e.preventDefault(); setVisible(!isVisible) }}
                    ></button>
                    <form 
                        className= {isVisible?"sidebar__img-form visible": "sidebar__img-form"}
                        onSubmit={(e) => addImg(e, imgURL, canvas)}
                    >
                            <input className="sidebar__img-form-input"
                                placeholder='url картинки'
                                type="text"
                                value={imgURL}
                                onChange={(e) => setImgURL(e.target.value)}
                            />
                            <button type="submit" className="sidebar__img-form-btn">Add</button>
                    </form>
                </div>
             </div>
             <div className='sidebar__history-controls-wrapper'>
                <button className='sidebar__undo-btn' onClick={()=> canvas.undo()}></button>
                <button className='sidebar__redo-btn' onClick={()=> canvas.redo()}></button>
             </div>
        </div>
    )
}

export default Sidebar;