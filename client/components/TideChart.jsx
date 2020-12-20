import React, { useRef, useEffect } from 'react';


const TideChart = (props) => {
  const canvasRef = useRef(null)

  const getPixelRatio = (context) => {
    let backingStore =
    context.backingStorePixelRatio ||
    context.webkitBackingStorePixelRatio ||
    context.mozBackingStorePixelRatio ||
    context.msBackingStorePixelRatio ||
    context.oBackingStorePixelRatio ||
    context.backingStorePixelRatio ||
    1;

    return (window.devicePixelRatio || 1) / backingStore;



  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    let ratio = getPixelRatio(context);
    let width = getComputedStyle(canvas)
      .getPropertyValue('width')
      .slice(0, -2);
    let height = getComputedStyle(canvas)
      .getPropertyValue('height')
      .slice(0, -2);
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.beginPath();
    context.strokeStyle = 'blue';
    context.fillStyle = 'blue';
    context.moveTo(0, 300)
    context.bezierCurveTo(150, 0, 250, 300, 350, 350);
    context.bezierCurveTo(450, 350, 550, 400, 650, 200);
    context.bezierCurveTo(750, 100, 850, 300, 1000, 300);
    context.lineTo(1000, 1000);
    context.lineTo(0, 400);
    context.lineTo(0, 300);
    context.fill();





    context.stroke();

  }, [])

  //example tide chart would be high 1.8ft low -.2 ft hight 2.2 ft low .3ft
  // bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)

  // The x and y parameters in both of these methods are the coordinates of the end point. cp1x and cp1y are the coordinates of the first control point, and cp2x and cp2y are the coordinates of the second control point.






  return (
    <div>
      <canvas style={styles.canvas} ref={canvasRef} {...props} />
    </div>


  )

};
let styles = {
  canvas: {
    marginTop: 10,
    width: "500px",
    height: "200px",
    borderTop: "1px solid red",
    borderBottom: "1px solid red"
  }
}

export default TideChart;





// useEffect(() => {
//   const canvas = canvasRef.current;
//   const context = canvas.getContext('2d');
//   let ratio = getPixelRatio(context);
//   let width = getComputedStyle(canvas)
//     .getPropertyValue('width')
//     .slice(0, -2);
//   let height = getComputedStyle(canvas)
//     .getPropertyValue('height')
//     .slice(0, -2);
//   canvas.width = width * ratio;
//   canvas.height = height * ratio;
//   canvas.style.width = `${width}px`;
//   canvas.style.height = `${height}px`;
//   context.beginPath();
//   context.strokeStyle = 'blue';
//   context.fillStyle = 'blue';
//   context.moveTo(0, 300)
//   context.bezierCurveTo(150, 0, 250, 300, 350, 350);
//   context.bezierCurveTo(450, 350, 550, 400, 650, 200);
//   context.bezierCurveTo(750, 100, 850, 300, 1000, 300);
//   context.lineTo(1000, 1000);
//   context.lineTo(0, 400);
//   context.lineTo(0, 300);
//   context.fill();





//   context.stroke();

// }, [])