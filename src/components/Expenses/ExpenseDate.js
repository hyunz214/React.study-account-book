import "./ExpenseDate.css";

function ExpenseDate(props) {
  let { date } = props;
  const month = date.toLocaleDateString("en-US", { month: "long" });
  const day = date.toLocaleDateString("en-US", { month: "2-digit" });
  const year = date.getFullYear();

  // if (typeof date === "object" && date !== null && "toLocaleDateString" in date) {
  //   const result = date.toLocaleDateString("en-US");
  //   console.log(result); // 👉️ 12/16/...
  // }

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
