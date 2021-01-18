import Chart from 'chart.js';
import setChart from '../code/setChart';
import { operations } from '../code/operations';

import '../styles/Birthday_home.css';
import view from '../views/Birthday_home.html'

export default () => {
  const divElement = document.createElement('div');
  divElement.innerHTML = view;

  let slider = divElement.querySelector("#myRange");
  let slider2 = divElement.querySelector("#myRange2");

  let ctx = divElement.querySelector('#chart').getContext('2d');
  let chart = new Chart(ctx, setChart(
    operations.labelVectorMaker(slider.value),
    operations.sameDayBirthdayDataVector(slider.value),
    'rgb(54, 162, 235)',
    'rgb(54, 162, 235, 0.2)'
    )
  );

  slider.oninput = function() {
    let labels = operations.labelVectorMaker(slider.value);
    let data = operations.sameDayBirthdayDataVector(slider.value);
    chart.data.labels = labels;
    chart.data.datasets[0].data = data;
    chart.update();
  }

  let ctx2 = divElement.querySelector('#chart2').getContext('2d');
  let chart2 = new Chart(ctx2, setChart(
    operations.labelVectorMaker(slider2.value),
    operations.twoSameDataVector(slider2.value),
    'rgb(200, 99, 231)',
    'rgb(200, 99, 231, 0.2)'
    )
  );

  slider2.oninput = function() {
    let labels = operations.labelVectorMaker(slider2.value);
    let data = operations.twoSameDataVector(slider2.value);
    chart2.data.labels = labels;
    chart2.data.datasets[0].data = data;
    chart2.update();
  }
  return divElement;
}
