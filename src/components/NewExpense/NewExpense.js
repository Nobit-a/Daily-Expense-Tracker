import Card from '../UI/Card'
import ExpressForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        props.onSaveExpenseData(expenseData)
    }

    return (
        <Card className='new-expense'>
            <ExpressForm onSaveExpenseData={saveExpenseDataHandler}/>
        </Card>
    )
}

export default NewExpense