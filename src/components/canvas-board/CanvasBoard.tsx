import './styles';


const CanvasBoard = (props) => {
  window.onresize = function () {
    let box = document.querySelector('.fabric-canvas-wrapper');
    let width = box.clientWidth;
    let heigth = box.clientHeight;
    props.canvas.setDimensions({width:width, height:heigth});
  }
  return (
      <div className="fabric-canvas-wrapper">
          <canvas id="canvas" />
      </div>
  )
}

export default CanvasBoard;