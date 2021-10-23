import React from 'react'
import { Fragment } from 'react/cjs/react.production.min'

const BudgetForm = () => {
  return (
    <Fragment>
      <h2>Introduce your Budget</h2>

      <form>
        <input
          type="text"
          className="u-full-width"
          placeholder="Introduce your budget"
        />
        <input
          type="submit"
          className="button-primary u-full-width"
        />
      </form>

    </Fragment>
  )
}

export default BudgetForm
