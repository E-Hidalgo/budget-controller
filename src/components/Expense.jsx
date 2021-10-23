import React from 'react'

export const Expense = ({ expense }) => {
  return (
    <li className="gastos">
      <p>
        {expense.name}
        <span className="gasto"> {expense.amount} €</span>
      </p>

    </li>
  )
}
