import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            id: Math.random().toString(),
            ...enteredExpenseData,
        };
        props.onAddExpense(expenseData);
        changeIsEditingHandler();
        // console.log(expenseData);
    };
    const [isEditing, setIsEditing] = useState(false);

    const changeIsEditingHandler = () => {
        setIsEditing(!isEditing);
    };

    return (
        <div className={"new-expense"}>
            {isEditing ? (
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={changeIsEditingHandler} />
            ) : (
                <button type="button" onClick={changeIsEditingHandler}>
                    Add New Expense
                </button>
            )}
        </div>
    );
};

export default NewExpense;
