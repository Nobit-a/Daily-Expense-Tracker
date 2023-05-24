import ExpenseDate from './ExpenseDate'
import {useState} from 'react'
import Card from "../UI/Card"
import './ExpenseItem.css'

const ExpenseItem = (props) => {

    const [title, setTitle] = useState(props.expenses.title)

    const clickHandler = () => {
        setTitle("Updated")
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.expenses.date}/>
            <h2 className="expense-item__description" >{title}</h2>
            <div className="expense-item__price">INR {props.expenses.amount}</div>
        </Card>

    )
}

export default ExpenseItem