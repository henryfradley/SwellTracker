import React from 'react';
import {Line} from 'react-chartjs-2';
import wave from '../src/wave.module.scss'

const WaveChart = function (props: any) {
  const primaryData = props.waveData.primary;
  const secondaryData = props.waveData.secondary;

  const waveData = {
    labels: ['12am', '3am', '6am', '9am', '12pm', '3pm', '6pm', '9pm', '12am'],
    datasets: [{
      label: 'Primary Swell',
      pointBackgroundColor: '#004de6',
      fill: false,
      borderColor: '#004de6',
      data: primaryData
    },
    {
      label: 'Secondary Swell',
      pointBackgroundColor: '#ff9900',
      fill: false,
      borderColor: '#ff9900',
      data: secondaryData
    }
  ]
  }

  const chartOptions = {
    legend:{
      display: true,
      labels: {
        usePointStyle: true,
        }
      },
    scales: {
      xAxes: [{
         gridLines: {
            display: true
         }
      }],
      yAxes: [{
        ticks: {
          callback: function(value: number, index: number, values: any) {
            return  value + 'ft';

          }

        },
         gridLines: {
            display: true
         }
      }]
    }
  }





  return (
    <div className={wave.chart}>
      <Line
      data={waveData}
      options={chartOptions}
      />
    </div>
  )




}


export default WaveChart