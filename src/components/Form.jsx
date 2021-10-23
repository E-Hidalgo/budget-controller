import React, { useState } from 'react'
import uuid from "react-uuid"
import { Error } from './Error'


const Form = ({ setExpense, setCreateExpense }) => {

  const [name, setName] = useState("")
  const [amount, setAmount] = useState(0)
  const [error, setError] = useState(false)

  const addExpense = (e) => {
    e.preventDefault()

    if (amount < 1 || isNaN(amount) || name.trim() === "") {
      setError(true)
      return
    }

    const expense = {
      name,
      amount,
      id: uuid()
    }
    setExpense(expense)
    setCreateExpense(true)

    setName("")
    setAmount(0)
  }

  return (
    <form
      onSubmit={addExpense}
    >
      <h2>Add your expenses here</h2>

      <div className="campo">
        <label>Expense Name</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ex. Transportation"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <div className="campo">
          <label>Expense Amount</label>
          <input
            type="number"
            className="u-full-width"
            placeholder="Ex. 300"
            value={amount}
            onChange={e => setAmount(parseInt(e.target.value))}
          />
          {error ? <Error message="Incorrect Name or Budget" /> : null}

        </div>
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Add Expense"
        />
      </div>
    </form>
  )
}

export default Form
