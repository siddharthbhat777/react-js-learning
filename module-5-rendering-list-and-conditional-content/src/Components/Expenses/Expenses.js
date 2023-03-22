import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (propsExpense) => {

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectYear => {
        setFilteredYear(selectYear);
    };

    const filteredExpenses = propsExpense.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    /*
    let expensesContent = <p>No expenses found.</p>; // we can use jsx code in this way too if it is repetitive

    // seperating logical part from jsx code
    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map((expense) => (
            <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
        ))
    }
    */

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses} />

            {/* OR */}

            {/* 
                // With &&
                {filteredExpenses.length === 0 && expensesContent // If there are no items in list then print this }
                {filteredExpenses.length > 0 && // if there is atleast 1 item in the list
                    filteredExpenses.map((expense) => (
                        <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
                    ))
                }

                    OR

                // With ?:
                {filteredExpenses.length === 0 ? (
                    <p>No expenses found.</p>
                    ) : (
                    filteredExpenses.map((expense) => (
                        <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
                    ))
                    )
                }
            */}
        </Card>
    )
};

export default Expenses