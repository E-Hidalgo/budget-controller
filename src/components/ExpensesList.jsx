import React from 'react'
import { Expense } from './Expense'

const ExpensesList = ({ expensesList }) => {
  return (
    <div className="gastos-realizados">
      {expensesList.map(expense => (

        <Expense expense={expense} />

      ))}
    </div>
  )
}

export default ExpensesList
