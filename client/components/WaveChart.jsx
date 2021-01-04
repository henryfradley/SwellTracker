import React, { useRef, useEffect } from 'react';
import converters from '../../helpers/converters.js'

const WaveChart = (props) => {
  const canvasRef = useRef(null);
  let waveHeights = props.waveData.primary;

  let secondaryWaveHeights = props.waveData.secondary;

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
    const secondaryContext = canvas.getContext('2d');

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
    context.strokeStyle = '#004de6';
    context.lineWidth = 2;
    context.moveTo(0, waveHeights[0]);
    context.lineTo(28, waveHeights[1]);
    context.lineTo(56, waveHeights[2]);
    context.lineTo(84, waveHeights[3]);
    context.lineTo(112, waveHeights[4]);
    context.lineTo(140, waveHeights[5]);
    context.lineTo(168, waveHeights[6]);
    context.lineTo(196, waveHeights[7]);
    context.lineTo(224, waveHeights[8]);
    context.lineTo(252, waveHeights[9]);
    context.lineTo(280, waveHeights[10]);
    context.lineTo(308, waveHeights[11]);
    context.lineTo(336, waveHeights[12]);
    context.lineTo(364, waveHeights[13]);
    context.lineTo(392, waveHeights[14]);
    context.lineTo(420, waveHeights[15]);
    context.lineTo(448, waveHeights[16]);
    context.lineTo(476, waveHeights[17]);
    context.lineTo(504, waveHeights[18]);
    context.lineTo(532, waveHeights[19]);
    context.lineTo(560, waveHeights[20]);
    context.lineTo(588, waveHeights[21]);
    context.lineTo(616, waveHeights[22]);
    context.lineTo(644, waveHeights[23]);
    context.lineTo(672, waveHeights[24]);
    context.lineTo(700, waveHeights[25]);

    context.stroke();

    secondaryContext.beginPath();
    secondaryContext.strokeStyle ='#ff9900';
    secondaryContext.moveTo(0, secondaryWaveHeights[0]);
    secondaryContext.lineTo(28, secondaryWaveHeights[1]);
    secondaryContext.lineTo(56, secondaryWaveHeights[2]);
    secondaryContext.lineTo(84, secondaryWaveHeights[3]);
    secondaryContext.lineTo(112, secondaryWaveHeights[4]);
    secondaryContext.lineTo(140, secondaryWaveHeights[5]);
    secondaryContext.lineTo(168, secondaryWaveHeights[6]);
    secondaryContext.lineTo(196, secondaryWaveHeights[7]);
    secondaryContext.lineTo(224, secondaryWaveHeights[8]);
    secondaryContext.lineTo(252, secondaryWaveHeights[9]);
    secondaryContext.lineTo(280, secondaryWaveHeights[10]);
    secondaryContext.lineTo(308, secondaryWaveHeights[11]);
    secondaryContext.lineTo(336, secondaryWaveHeights[12]);
    secondaryContext.lineTo(364, secondaryWaveHeights[13]);
    secondaryContext.lineTo(392, secondaryWaveHeights[14]);
    secondaryContext.lineTo(420, secondaryWaveHeights[15]);
    secondaryContext.lineTo(448, secondaryWaveHeights[16]);
    secondaryContext.lineTo(476, secondaryWaveHeights[17]);
    secondaryContext.lineTo(504, secondaryWaveHeights[18]);
    secondaryContext.lineTo(532, secondaryWaveHeights[19]);
    secondaryContext.lineTo(560, secondaryWaveHeights[20]);
    secondaryContext.lineTo(588, secondaryWaveHeights[21]);
    secondaryContext.lineTo(616, secondaryWaveHeights[22]);
    secondaryContext.lineTo(644, secondaryWaveHeights[23]);
    secondaryContext.lineTo(672, secondaryWaveHeights[24]);
    secondaryContext.lineTo(700, secondaryWaveHeights[25]);
    secondaryContext.stroke();







  }, [])


  return (
    <div style={styles.chart}>
      <div>
        <div style={styles.chartHolder}>
          <div style={styles.waveHt}>
            <div style={styles.x}>12ft</div>
            <div style={styles.x}>9ft</div>
            <div style={styles.x}>6ft</div>
            <div style={styles.x}>3ft</div>
            <div style={styles.x}>0ft</div>
          </div>
          <canvas width="350" height="150" style={styles.canvas} ref={canvasRef} {...props} />
        </div>

      </div>

      <div style={styles.xAxis}>
        <div style={styles.x}>12am</div>
        <div style={styles.x}>6am</div>
        <div style={styles.x}>12pm</div>
        <div style={styles.x}>6pm</div>
        <div style={styles.x}>12am</div>

      </div>
    </div>


  )

};
let styles = {
  chart: {
    width: "400px"
  },
  xAxis: {
    display: "flex",
    'justify-content': "space-between",
    width: "350px",
    marginRight: "25px",
    marginLeft: "25px",

  },
  chartHolder: {
    display: "flex",
    width: "380px",
    marginLeft: "20px",
    marginRight: "0px"

  },
  waveHt: {
    display: "flex",
    'flex-direction': "column",
    'justify-content': "space-between",


  },
  x: {
    'font-size': "10px",
    'font-family': 'sans-serif',
    'text-align': 'right'

  },
  canvas: {
    width: "350px",
    height: "150px",
    backgroundColor: '#F5F5F5',
    'image-rendering': "-moz-crisp-edges",
    'image-rendering': "-webkit-crisp-edges",
    'image-rendering': "pixelated",
    'image-rendering': "crisp-edges"
  }
}

export default WaveChart;





