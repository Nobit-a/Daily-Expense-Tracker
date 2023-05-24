import ExpenseItem from "./ExpenseItem"
import Card from "../UI/Card"
import { useState } from 'react';
import ExpensesFilter from "../Filter/ExpensesFIlter"
import './Expenses.css'

const Expenses = (props) => {
    const [filterYear, setFilterYear] = useState('1000')

    const filterChoice = (filterValue) => {
        setFilterYear(filterValue)
    }

    let filteredExpenses = props.expenses
    if (filterYear>1100) {
        filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() === filterYear)
    }

    let displayedExpenseContent = <h3 className="expenses__notFound">No expense found. Add one today!</h3>
    
    if (filteredExpenses.length > 0) {
        
            displayedExpenseContent = filteredExpenses.map((expense) => {
                return <ExpenseItem key={expense.id} expenses={expense} />
            })
        }
        
    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter chooseFilter={filterChoice} />
                {displayedExpenseContent}
            </Card>
        </div>

    )
}

export default Expenses