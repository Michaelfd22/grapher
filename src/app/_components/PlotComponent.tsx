"use client"
import React from 'react';
import Plot from 'react-plotly.js';



const PlotComponent: React.FC = () => {
  return (
    <Plot
      data={[
        {
          x: [1, 2, 3, 4],
          y: [10, 15, 13, 17],
          type: 'scatter',
          mode: 'lines+markers',
          marker: { color: 'red' },
        },
        {
          x: [1, 2, 3, 4],
          y: [16, 5, 11, 9],
          type: 'scatter',
          mode: 'lines+markers',
          marker: { color: 'blue' },
        },
      ]}
      layout={{ title: 'Simple Plot' }}
    />
  );
};

export default PlotComponent;