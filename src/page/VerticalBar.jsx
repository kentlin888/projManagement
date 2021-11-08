import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
  labels: [
    // [ '1.1. 透過本局行','動調查暨智慧',
    //   '分析平台提供之介面取得特定',
    //   '涉案漁船於特定期間之入出港紀錄。'
    // ],
    'XXXX',
    '1.2. 前述漁船入出港紀錄須於毒品情資分析系統中落地，並透過現有情資頁面呈現、新增、刪除。',
    'Yellow',
    'Green',
    'Purple',
    'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [4, 6, 3, 5, 2, 3],
      // strokeColor: "#f00",
      // pointColor: "#f00",
      // pointStrokeColor: "#fff",
      // pointHighlightFill: "#fff",
      // pointHighlightStroke: "#ccc",

      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },

    {
      label: '# of Votes',
      data: [4, 6, 3, 5, 2, 3],

      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true, maintainAspectRatio: true,
  // pointLabelFontSize: 30,
  // width: 200,
  // height: 200,
  scales: {
    xAxes: [
      {
        ticks: {
          callback: function (label, index, labels) {
            if (/\s/.test(label)) {
              return label.split(" ");
            } else {
              return label;
            }
          }
        },
        labelMaxWidth: 100,
        prefix: "This is a very long label "
      }
    ],
    axisX: {
      //labelAutoFit: true, //false by default.
      //labelWrap: false, // true by default.
      labelMaxWidth: 100,
      prefix: "This is a very long label "
    },
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
    // pointLabels: {
    //   callback: (label) => {
    //     return label.length > 5 ? label.substr(0, 5) + '...' : label;
    //   },
    // },
  },
};

const VerticalBar = () => (
  <>
    <div className='header'>
      <h1 className='title'>Vertical Bar Chart</h1>
      <div className='links'>
        <a
          className='btn btn-gh'
          href='https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/VerticalBar.js'
        >
          Github Source
        </a>
      </div>
    </div>
    <div>
      {/* <Line data={this.state.chartData} options={this.state.chartOptions} width={this.state.width} height={this.state.height} /> */}
      <Bar data={data} options={options} width={350} height={50} />
    </div>

  </>
);

export default VerticalBar;
