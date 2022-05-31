import React from 'react'

import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from './Card';

const ExpenseItem = (props) => {

  // const [title, setTitle] = useState(props.title)

  // const click = () => {
  //   setTitle('Updated')
  //   console.log(title)
  // }


  return (
    <Card className='expense-item'>
        <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
