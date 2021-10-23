import React, { useState } from 'react'
import BudgetForm from "./components/BudgetForm";
import Form from './components/Form';


function App() {

  const [budget, setBudget] = useState(0)
  const [rest, setRest] = useState(0)

  return (
    <div className="container">
      <h1>Presupuesto</h1>

      <div className="contenido-principal contenido">
        <BudgetForm
          setBudget={setBudget}
          setRest={setRest}
        />

        <div className="row">
          <div className="one-half column">
            <Form />
          </div>

          <div className="one-half column">
            2
          </div>
        </div>
      </div>



    </div>
  );
}

export default App;
