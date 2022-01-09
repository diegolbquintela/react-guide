import React, { useState } from "react";

import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";

import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filteredDateChangeHandler = (selectedFilterYear) => {
    setFilteredYear(selectedFilterYear);
    console.log(selectedFilterYear);
  };

  const filteredArray = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filteredYear}
          onFilteredDateChange={filteredDateChangeHandler}
        />
        <ExpensesChart expenses={filteredArray} />
        <ExpensesList items={filteredArray} />
      </Card>
    </div>
  );
};

export default Expenses;
