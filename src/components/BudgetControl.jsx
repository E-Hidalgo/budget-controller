import React from 'react'
import { checkBudget } from "../helpers"

export const BudgetControl = ({ budget, rest }) => {
  return (
    <>
      <div className="alert alert-primary">
        Budget: {budget} €
      </div>

      <div className={checkBudget(budget, rest)}>
        Rest: {rest} €
      </div>
    </>

  )
}
