import React from 'react';
import './ChartBar.css'

const ChartBar = chartBarProps => {

    let barFillHeight = '0%';

    if (chartBarProps.maxValue > 0) {
        barFillHeight = Math.round((chartBarProps.value / chartBarProps.maxValue) * 100) + '%';
    }

    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{ height: barFillHeight }}></div>
            </div>
            <div className="chart-bar__label">{chartBarProps.label}</div>
        </div>
    )
};

export default ChartBar;