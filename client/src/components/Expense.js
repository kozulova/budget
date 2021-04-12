import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

const Expense = ({expense}) => {
    const {deleteExpence} = useContext(GlobalContext);
    return (
            <li className="expense" key={expense._id}>
            <div><strong>{expense.category}</strong> - ${expense.amount}</div>
            <div>
            <button onClick={()=>deleteExpence(expense._id)}>DELETE</button>
            </div> 
            </li>
    )
}

export default Expense
