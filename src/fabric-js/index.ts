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
    fabric.Image.fromURL(url, img => {
        img.scale(0.75);
        canvi.add(img);
        canvi.renderAll();
    });
}

 export const addLine =  canvi => {
    const line = new fabric.Line([50, 10, 200, 150], {
        stroke: 'green'
    });
    canvi.add(line);
    canvi.renderAll();
 }

export const initCanvasBoard = () => {
    const canvas = new fabric.Canvas("canvas", {
      
      height: Math.ceil(window.innerHeight/100)*85.3,
      width: Math.ceil(window.innerWidth/100)*66.47,
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

    window.onresize = function () {
        let box = document.querySelector('.fabric-canvas-wrapper');
        let width = box.clientWidth;
        let heigth = box.clientHeight;
        canvas.setDimensions({width:width, height:heigth});
      }


    return canvas;
  }