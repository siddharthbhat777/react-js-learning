import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpense = (getAndSendDataProps) => {

  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseDataForward = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    getAndSendDataProps.onAddExpense(expenseDataForward);
    //console.log(expenseDataForward);
    setIsEditing(false);
  };
  
  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/* getting data from child component */ onCancel={stopEditingHandler} />}
    </div>
  )
};

export default NewExpense