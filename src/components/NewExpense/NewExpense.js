import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const [isAddingExpense, setIsAddingExpense] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    //sending data to parent app.js
    props.onAddExpense(expenseData);
  };

  const expenseFormHandler = () => {
    setIsAddingExpense(true);
  };

  const cancelAddingExpense = () => {
    setIsAddingExpense(false);
  };

  return (
    <div className="new-expense">
      {isAddingExpense ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelAddingExpense}
        />
      ) : (
        <button onClick={expenseFormHandler}>add new expense</button>
      )}
    </div>
  );
};

export default NewExpense;
