import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //     enteredTitle: '',
  //     enteredAmount: '',
  //     enteredDate: ''
  // })

  const titleHandler = (e) => {
    // setUserInput({
    //     ...userInput,
    //     enteredTitle: e.target.value})

    // setUserInput((prevState) =>{
    //     return{ ...prevState, enteredTitle: e.target.value} /*safer*/
    // })

    setEnteredTitle(e.target.value);
  };

  const amountHandler = (e) => {
    // setUserInput({
    //     ...userInput,
    //     enteredAmount: e.target.value})

    // setUserInput((prevState) =>{
    //     return{ ...prevState, enteredAmount: e.target.value}
    // })

    setEnteredAmount(e.target.value);
  };

  const dateHandler = (e) => {
    // setUserInput({
    //     ...userInput,
    //     enteredDate: e.target.value})

    // setUserInput((prevState) =>{
    //     return{ ...prevState, enteredDate: e.target.value}
    // })

    setEnteredDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData)

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__constrols">
        <div className="new-expense__controls">
          <label>Title</label>
          <input type="text" 
          value={enteredTitle} 
          onChange={titleHandler} />
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountHandler}
          />
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
