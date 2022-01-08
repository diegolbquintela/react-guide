import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "PLTR 23C",
    amount: 0.31,
    date: new Date(2021, 12, 14),
  },
  {
    id: "e2",
    title: "PLTR 17C",
    amount: 0.25,
    date: new Date(2020, 5, 24),
  },
  {
    id: "e3",
    title: "PLTR 19C",
    amount: 0.15,
    date: new Date(2020, 3, 1),
  },
  {
    id: "e4",
    title: "PLTR 16.5C",
    amount: 0.3,
    date: new Date(2020, 7, 14),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
