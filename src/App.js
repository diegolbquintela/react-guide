import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 0.3,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: 0.3,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 0.3,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e4",
      title: "Car Insurance",
      amount: 0.3,
      date: new Date(2020, 7, 14),
    },
  ];

  // const expenseItemMap = expenses.map((i) => (
  //   <ExpenseItem
  //     title={expenses[i].title}
  //     amount={expenses[i].amount}
  //     date={expenses[i].date}
  //   />
  // ));

  return (
    <div>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
