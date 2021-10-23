import React, { useState, useEffect } from 'react'
import { BudgetControl } from './components/BudgetControl';
import BudgetForm from "./components/BudgetForm";
import ExpensesList from './components/ExpensesList';
import Form from './components/Form';


function App() {

  const [budget, setBudget] = useState(0)
  const [rest, setRest] = useState(0)
  const [showBudgetForm, setShowBudgetForm] = useState(true)
  const [expensesList, setExpensesList] = useState([])
  const [expense, setExpense] = useState([])
  const [createExpense, setCreateExpense] = useState(false)

  useEffect(() => {

    if (createExpense) {
      setExpensesList([...expensesList, expense])

      const restOfBudget = rest - expense.amount
      setRest(restOfBudget)
    }

  }, [setExpensesList, expense]);




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
                    setExpense={setExpense}
                    setCreateExpense={setCreateExpense}
                  />

                </div>

                <div className="one-half column">
                  <ExpensesList expensesList={expensesList} />
                  <BudgetControl budget={budget} rest={rest} />

                </div>
              </div>
            )
        }
      </div>



    </div>
  );
}

export default App;
