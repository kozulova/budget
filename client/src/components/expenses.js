import React, { useEffect, useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
import Expense from './Expense';

const Expenses = () => {

    const {getExpenses, state} = useContext(GlobalContext);
    
    useEffect(()=>{
        getExpenses();
    }, [])

    return (
        <div>
            <h2>Day spending</h2>
            <ul>
                {state.expenses.map(expense=><Expense expense={expense} key={expense._id}/>)}
                <li key="total">Total - $ {state.expenses.reduce((sum, expense) => { return sum + Number(expense.amount) }, 0)}</li>
            </ul>
            
        </div>
    )
}

export default Expenses