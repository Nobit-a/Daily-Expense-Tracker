import { useState } from 'react'
import './ExpenseForm.css'

const ExpressForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setenteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')
    const [expandedExpenseWindow, setExpandedExpenseWindow] = useState(false)

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }

    const amountChangeHandler = (event) => {
        setenteredAmount(event.target.value)
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }

    const submissionHandler = (event) => {
        event.preventDefault()

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        setEnteredTitle('')
        setenteredAmount('')
        setEnteredDate('')
        setExpandedExpenseWindow(false)

        props.onSaveExpenseData(expenseData)
        
    }

    // Forms have an inbuilt behavior to handle submissions, called onSubmit. 
    // And these onThings have an automatic event parameter getting passed between them.

    const addExpenseHandler = () => {
        setExpandedExpenseWindow(true)
    }

    const cancelHandler = () => {
        setExpandedExpenseWindow(false)
    }

    if (expandedExpenseWindow) {
        return (
            <form onSubmit={submissionHandler}>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Title</label>
                        <input onChange={titleChangeHandler} value={enteredTitle} type='text' required='true' />
                    </div>

                    <div className='new-expense__control'>
                        <label>Amount</label>
                        <input onChange={amountChangeHandler} value={enteredAmount} type='number'
                            min='1' step='1' required='true' />
                    </div>

                    <div className='new-expense__control'>
                        <label>Date</label>
                        <input onChange={dateChangeHandler} value={enteredDate} type='date'
                            min='2019-01-01' max='2023-12-31' required='true' />
                    </div>
                </div>

                <div className='new-expense__actions'>
                    <button onClick={cancelHandler}>Cancel</button>
                    <button type='submit'>Add Expense</button>
                </div>

            </form>
        )
    }

    return (
        <div>
            <button onClick={addExpenseHandler}>Add New Expense</button>
        </div>
    )

}

export default ExpressForm