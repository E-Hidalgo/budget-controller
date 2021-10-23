import React, { useState } from 'react'
import { Fragment } from 'react/cjs/react.production.min'

import { Error } from './Error'
const BudgetForm = () => {

  const [amount, setAmount] = useState(0)
  const [error, setError] = useState(false);


  const defineBudget = (e) => {
    setAmount(parseInt(e.target.value, 10))
  }

  const addBudget = (e) => {
    e.preventDefault()

    if (amount < 1 || isNaN(amount)) {
      setError(true)
      return;
    }
    setError(false)
  }

  return (
    <Fragment>
      <h2>Introduce your Budget</h2>

      {error ? <Error message="Budget is incorrect" /> : null}
      <form onSubmit={addBudget}>
        <input
          type="text"
          className="u-full-width"
          placeholder="Introduce your budget"
          onChange={defineBudget}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Define Budget"
        />
      </form>

    </Fragment>
  )
}

export default BudgetForm
