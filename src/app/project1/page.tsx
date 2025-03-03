import Link from "next/link";
import * as Plotly from 'plotly.js';

export default function HomePage() {
  const xArray = ["Italy","France","Spain","USA","Argentina"];
  const yArray = [55, 49, 44, 24, 15];
  
  const data = [{
    x: xArray,
    y: yArray,
    type: "bar",
    orientation:"v",
    marker: {color:"rgba(0,0,255)"}
  }];
  
  const layout = {title:"World Wide Wine Production"};

  return (Plotly.newPlot("myPlot", data, layout));
};