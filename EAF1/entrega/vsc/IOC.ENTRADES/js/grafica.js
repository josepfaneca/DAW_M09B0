// exemple de la pàgina chart.js


//var graficaCanvas = document.getElementById("grafica");
Chart.defaults.font.family = "Teko";

const labels = ["Google Chrome", "Safari", "Firefox", "Edge", "Samsung Internet", "Opera", "Altres"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Percentatge de Mercat",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [63.59, 19.14, 3.76, 3.41, 3.31, 2.19, 4.6],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    },
  ],
};

const config = {
    type: "bar",
    options: {
        borderRadius:5,
        offset:10,
        radius:'90%'
    },
    data: data
};
const config1 = {
  type: "pie",
  options: {
      borderRadius:5,
      offset:10,
      radius:'60%'
  },
  data: data
};
const config2 = {
  type: "doughnut",
  options: {
      borderRadius:5,
      offset:10,
      radius:'60%'
  },
  data: data
};
const grafica = $('#grafica');
let myChart = new Chart(grafica,config);


//veure manual aquí:  https://www.youtube.com/watch?v=n2JekHWf1fE
function graficaTipus(type) {
    myChart.destroy();
    switch (type) {
      case 'bar':
      myChart = new Chart(grafica,config);
      break;

      case 'pie':
        myChart = new Chart(grafica,config1);
        break;

      case 'doughnut':
        myChart = new Chart(grafica,config2);
        break;  
    }  

};


