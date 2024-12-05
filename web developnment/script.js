
const ctx = document.getElementById('bloodPressureChart').getContext('2d');

let labels = ['Oct 2023', 'Nov 2023', 'Dec 2023', 'Jan 2024', 'Feb 2024', 'Mar 2024'];
let systolicData = [160, 155, 162, 158, 150, 145];
let diastolicData = [78, 80, 75, 77, 76, 74];


const bloodPressureChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: labels,
    datasets: [
      {
        label: 'Systolic',
        data: systolicData,
        borderColor: '#FF6384',
        borderWidth: 2,
        fill: false,
      },
      {
        label: 'Diastolic',
        data: diastolicData,
        borderColor: '#36A2EB',
        borderWidth: 2,
        fill: false,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Pressure (mmHg)',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Months',
        },
      },
    },
  },
});


function updateChart(newLabels, newSystolicData, newDiastolicData) {
  bloodPressureChart.data.labels = newLabels; 
  bloodPressureChart.data.datasets[0].data = newSystolicData; 
  bloodPressureChart.data.datasets[1].data = newDiastolicData; 
  bloodPressureChart.update(); 
}


fetch('https://my-app.com/wizards?token=1234')
  .then(response => response.json())
  .then(data => {
    
    const newLabels = data.labels;
    const newSystolicData = data.systolic;
    const newDiastolicData = data.diastolic;


    updateChart(newLabels, newSystolicData, newDiastolicData);
  })
  .catch(error => console.error('Error fetching data:', error));
