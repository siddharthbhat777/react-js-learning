import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (setDataProps) => {

    /* const [userInput, setUserInput] = useState({//to add multiple similar states at one time
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    }); */

    //long way
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {//here event is is inbuilt attribute of javascript which returns value which is changed and event is not a keyword
        //long way
        setEnteredTitle(event.target.value);
        /*
        short way but not good practice (reason is redundancy)
        setUserInput({ 
            ...userInput,  
            
            or
            /*
            enteredTitle: '',
            enteredAmount: '',
            enteredDate: ''
            * /
            
            enteredTitle: event.target.value//this will override enteredTitle
        });
        */
        //short and optimised way
        /* setUserInput((prevState) = () => {
         return {
             ...prevState,
             enteredTitle: event.target.value
         }
        }); */
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        /* setUserInput({
            ...userInput,
            enteredAmount: event.target.value
        }); */
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        /* setUserInput({
            ...userInput,
            enteredDate: event.target.value
        }); */
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }

        setDataProps.onSaveExpenseData(expenseData);//passing data to parent component with props
        //console.log(expenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' value={enteredTitle} /* used value to refresh section after clicking submit */ onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' value={enteredAmount} min='0.01' step='0.01' onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' value={enteredDate} min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='button' onClick={setDataProps.onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
};

export default ExpenseForm