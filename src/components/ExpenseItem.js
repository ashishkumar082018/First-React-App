// Write your code at relevant places in the code below:

import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div>
      <div className="expense-item">15 August 2023</div>
      <div className = "expense-item__description">
        <h2 >Book</h2>
        <div className="expense-item__price">$10</div>
        <div className="expense-item__location">Delhi</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
