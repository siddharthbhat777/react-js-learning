import React from 'react'; //no need to add this import statement in latest versions of react, but still adding it just in case if the project run on older react versions
import { useState } from 'react';
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from './Components/NewExpense/NewExpense';

const DUMMY_DATA = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2', title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12)
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_DATA);

  const addExpenseHandler = (expense) => {
    // console.log("In App.js");
    // console.log(expense)
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  console.log(expenses);

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
  // what is happening behind the scenes
  /*
  return React.createElement(
    'div',
    {},
    React.createElement('h2', {}, 'Let\'s get started!'),
    React.createElement(Expenses, { items: expenses })
  );
  */
};

export default App;
