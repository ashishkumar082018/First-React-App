import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"; // Import Expenses.css here

function Expenses({ expenses }) {
  return (
    <div className="expenses">
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          price={expense.price}
        />
      ))}
    </div>
  );
}

export default Expenses;
