import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

const Expense = ({expense}) => {
    const {deleteExpence, toogleExpense} = useContext(GlobalContext);
    return (
            <li className="expense" key={expense._id}>
            <div><strong>{expense.category}</strong> - ${expense.amount}</div>
            <div>
            <button onClick={()=>toogleExpense(expense._id)} key={`${expense._id}-edit`}>EDIT</button>
            <button onClick={()=>deleteExpence(expense._id)} key={`${expense._id}-delete`}>DELETE</button>
            </div> 
            </li>
    )
}

export default Expense