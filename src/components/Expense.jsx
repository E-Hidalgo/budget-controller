import React from 'react'

export const Expense = ({ expense }) => {
  return (
    <li className="gastos">{expense.name} {expense.amount} </li>
  )
}
