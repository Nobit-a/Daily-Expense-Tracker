import { useState } from 'react';
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense';
import DUMMY_EXPENSES from './components/DummyExpenses.js'

function App() {
  
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addNewExpense = (expenseData) => {
    setExpenses((prevExpensesArray)=>{return [expenseData, ...prevExpensesArray]})    
  }

  return (
    <div className="App">
      <NewExpense onSaveExpenseData={addNewExpense}/>
      <Expenses expenses={expenses} />
      </div>
  );
}

export default App;
