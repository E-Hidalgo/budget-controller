import React from 'react'
import uuid from "react-uuid"
import { Expense } from './Expense'

const ExpensesList = ({ expensesList }) => {
  return (
    <div className="gastos-realizados">
      {expensesList.map(expense => (

        <Expense key={uuid()} expense={expense} />

      ))}
    </div>
  )
}

export default ExpensesList
