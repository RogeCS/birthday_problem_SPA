


function setChart(labels, data, borderColor, backgroundColor){
  const chartParams = {
    // The type of chart we want to create
    type: 'line',
    // The data for our dataset
    data: {
      labels: labels,
      datasets: [{
        label: 'P(n)',
        borderColor: borderColor,
        backgroundColor: backgroundColor,
        data: data
      }]
    },
    // Configuration options go here
    options: {
      title: {
        display: false,
      },
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          fontColor: 'black',
        },
      },
      scales: {
        xAxes: [{
          gridLines: {
            display: false,
            color: 'rgba(255, 255, 255, 0.2)'
          },
          ticks: {
            fontColor: 'black',
            fontSize: 13
          }
        }],
        yAxes: [{
          gridLines: {
            display: false,
            color: 'rgba(255, 255, 255, 0.2)'
          },
          ticks: {
            fontColor: 'black',
            fontSize: 13
          }
        }]
      },
      responsive: true,
      maintainAspectRatio: false,
    }
  };
  return chartParams
}



export default setChart;