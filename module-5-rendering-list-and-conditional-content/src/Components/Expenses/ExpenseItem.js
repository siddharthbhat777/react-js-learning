import React from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (propsData) => {

    // const [title, setTitle] = useState(propsData.title);
    const title = propsData.title;
    console.log("Expense item evaluated by React");

    /* const clickHandler = () => {
        setTitle("Updated!");
        console.log(title);
    }; */

    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate datePass={propsData.date} />
                <div className="expense-item__description">
                    <h2>{title}</h2>
                    <div className="expense-item__price">₹{propsData.amount}</div>
                </div>
            </Card>
        </li>
    )
};

export default ExpenseItem;