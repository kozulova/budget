import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

const Expense = ({expense}) => {
    const {deleteExpence} = useContext(GlobalContext);
    console.log(expense._id);
    return (
            <li className="expense" key={expense._id}>
            <div>{expense.category}  {expense.amount}</div>
            <div>
            <button>EDIT</button> <button onClick={()=>deleteExpence(expense._id)}>DELETE</button>
            </div> 
            </li>
    )
}

export default Expense
