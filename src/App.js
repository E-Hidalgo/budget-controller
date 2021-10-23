import React, { useState } from 'react'
import BudgetForm from "./components/BudgetForm";
import Form from './components/Form';


function App() {

  const [budget, setBudget] = useState(0)
  const [rest, setRest] = useState(0)
  const [showBudgetForm, setShowBudgetForm] = useState(true)

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
                  <Form />
                </div>

                <div className="one-half column">
                  2
                </div>
              </div>
            )
        }
      </div>



    </div>
  );
}

export default App;
