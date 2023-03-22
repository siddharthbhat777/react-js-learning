import React from 'react';
import './ExpenseDate.css';

const ExpenseDate = (propsDate) => {

    const month = propsDate.datePass.toLocaleString('en-US', { month: 'long' });
    const day = propsDate.datePass.toLocaleString('en-US', { day: '2-digit' })
    const year = propsDate.datePass.getFullYear();

    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{day}</div>
        </div>
    )
};

export default ExpenseDate;