import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';
import './Graph.css';

const PopulationChart = () => {
  const [populationData, setPopulationData] = useState([]);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
        const data = await response.json();
        setPopulationData(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (populationData.length > 0) {
      if (chartInstance) {
        chartInstance.destroy(); 
      }

      // Extracting data for chart
      const years = populationData.map(entry => entry.Year);
      const populations = populationData.map(entry => entry.Population);

      // Creating chart
      const ctx = document.getElementById('population-chart');
      const newChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: years,
          datasets: [{
            label: 'Population',
            data: populations,
            backgroundColor: 'rgb(54, 162, 235)',
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });

      setChartInstance(newChartInstance); 
    }
  }, [populationData]);

  return (
    <div>
      <h2>US Population Chart</h2>
      <canvas id="population-chart" className="chartCanvas" width="500" height="400"></canvas>
    </div>
  );
};

export default PopulationChart;
