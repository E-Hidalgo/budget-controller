import React from 'react'



const Form = () => {
  return (
    <form>
      <h2>Add your expenses here</h2>

      <div className="campo">
        <label>Expense Name</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ex. Transporte"
        />

        <div className="campo">
          <label>Expense Amount</label>
          <input
            type="text"
            className="u-full-width"
            placeholder="Ex. 300"
          />
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
