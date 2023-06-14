import { fabric } from "fabric";

export const addRect = canvi => {
    const rect = new fabric.Rect({
       height: 200,
       width: 200,
       fill: '#353948'
    });
    canvi.add(rect);
    canvi.renderAll();
}

export const addCircle = canvi => {
    const circle = new fabric.Circle({
        radius: 200,
        fill: '',
        stroke: 'green',
        strokeWidth: 3
    });
    canvi.add(circle);
    canvi.renderAll();
}


export const addTriangle = canvi => {
    const Triangle = new fabric.Triangle({
        width: 150,
        height: 100,
        fill: '',
        stroke: 'green',
        strokeWidth: 3,
        cornerColor: 'blue',
        angle: 45,
    });
    canvi.add(Triangle);
    canvi.renderAll();
}

export const addText = canvi => {
    const textEditable = new fabric.Textbox(
      'Editable Textbox', {
      width: 400,
      editable: true
  });
    canvi.add(textEditable);
    canvi.renderAll();
 }

 export const addImg = (e, url, canvi) => {
    e.preventDefault();
    new fabric.Image.fromURL(url, img => {
      img.scale(0.75);
      canvi.add(img);
      canvi.renderAll();
    });
 }