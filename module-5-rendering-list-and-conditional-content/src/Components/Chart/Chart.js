import React from "react";
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = chartProps => {
    
    const dataPointValues = chartProps.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);

    return (
        <div className="chart">
            {
                chartProps.dataPoints.map(dataPoint => <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={totalMaximum} label={dataPoint.label} />)
            }
        </div>
    )
};

export default Chart;