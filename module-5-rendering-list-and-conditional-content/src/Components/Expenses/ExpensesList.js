import React from 'react';
import ExpenseItem from './ExpenseItem';
import "./ExpensesList.css"

const ExpensesList = expensesListProps => {

    // let expensesContent = <p>No expenses found.</p>; // we can use jsx code in this way too if it is repetitive

    // seperating logical part from jsx code
    /* if (expensesListProps.items.length > 0) {
        expensesContent = expensesListProps.items.map((expense) => (
            <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
        ))
    } */

    if (expensesListProps.items.length === 0) {
        return (
            <h2 className="expenses-list__fallback">Found no expenses.</h2>
        )
    }

    return (
        <ul className="expenses-list">
            {
                expensesListProps.items.map((expense) => (
                    <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
                ))
            }
        </ul>
    )
};

export default ExpensesList;