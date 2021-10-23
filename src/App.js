import React, { useState } from 'react'
import BudgetForm from "./components/BudgetForm";
import ExpensesList from './components/ExpensesList';
import Form from './components/Form';


function App() {

  const [budget, setBudget] = useState(0)
  const [rest, setRest] = useState(0)
  const [showBudgetForm, setShowBudgetForm] = useState(true)
  const [expensesList, setExpensesList] = useState([])


  const addNewExpense = (expense) => {
    setExpensesList(
      [...expensesList, expense]
    )
  }

  return (
    <div className="container">
      <h1>Budget</h1>

      <div className="main-content content">

        {
          showBudgetForm ?
            (
              <BudgetForm
                setBudget={setBudget}
                setRest={setRest}
                setShowBudgetForm={setShowBudgetForm}
              />
            ) :
            (
              <div className="row">
                <div className="one-half column">
                  <Form
                    addNewExpense={addNewExpense}
                  />
                </div>

                <div className="one-half column">
                  <ExpensesList expensesList={expensesList} />
                </div>
              </div>
            )
        }
      </div>



    </div>
  );
}

export default App;
