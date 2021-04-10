import React from 'react'

const Expense = ({expense}) => {
    return (
            <li className="expense" key={expense.id}>
            <div>{expense.category}  {expense.amount}</div>
            <div>
            <button>EDIT</button> <button>DELETE</button>
            </div> 
            </li>
    )
}

export default Expense
