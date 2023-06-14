import './style';
import { useState } from 'react';

const Sidebar = (props) => {
    const [isVisible, setVisible] = useState(false);


    return (
        <div className="sidebar">
            <div className='sidebar__tools-wrapper'>
                <div className="sidebar__btn-wrapper">
                    <button className="sidebar__add-rectangle-btn" onClick={() => props.addRect(props.canvas)} onContextMenu={(e) => e.preventDefault()}></button>
                    {/* <input type="color" value="#e66465" className="sidebar__add-rectangle-btn-input-color"/> */}
                </div>
                <div className="sidebar__btn-wrapper">
                    <button className="sidebar__add-circle-btn" onClick={() => props.addCircle(props.canvas)} onContextMenu={(e) => e.preventDefault()}></button>
                </div>
                <div className="sidebar__btn-wrapper">
                    <button className="sidebar__add-trinagle-btn" onClick={() => props.addTriangle(props.canvas)} onContextMenu={(e) => e.preventDefault()}></button>
                </div>
                <div className="sidebar__btn-wrapper">
                    <button className="sidebar__add-text-btn" onClick={() => props.addText(props.canvas)} onContextMenu={(e) => e.preventDefault()}></button>
                </div>
                <div className="sidebar__btn-wrapper">
                    <button 
                        className="sidebar__add-img-btn" 
                        onClick={(e) => { e.preventDefault(); setVisible(!isVisible) }}
                    ></button>
                    <form 
                        className= {isVisible?"sidebar__img-form visible": "sidebar__img-form"}
                        onSubmit={(e) => props.addImg(e, props.imgURL, props.canvas)}
                    >
                            <input className="sidebar__img-form-input"
                                placeholder='url картинки'
                                type="text"
                                value={props.imgURL}
                                onChange={(e) => props.setImgURL(e.target.value)}
                            />
                            <button type="submit" className="sidebar__img-form-btn">Add</button>
                    </form>
                </div>
             </div>
             <div className='sidebar__history-controls-wrapper'>
                <button className='sidebar__undo-btn'></button>
                <button className='sidebar__redo-btn'></button>

             </div>
        </div>
    )
}

export default Sidebar;