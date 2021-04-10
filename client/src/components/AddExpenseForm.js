import React, {useState, useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AddExpenseForm = () => {
    const {addExpense, getExpenses} = useContext(GlobalContext);

    const [date, setDate] = useState(new Date());
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('food');

    const createEntry = (e) => {
        e.preventDefault();
        const newExpense = {date, amount, category}
        addExpense(newExpense);
        console.log({date, amount, category})
    }

    const findExpensesByDate = (e) => {
        setDate(e);
        getExpenses(e);
    }

    return (
        <div className="expencesForm">
            <Calendar value={date} onClickDay={findExpensesByDate}/>
            <form onSubmit={createEntry}>
                <input type="number" placeholder='Spent amount'
                 value={amount} onChange={(e) => setAmount(e.target.value)}/>
                <select placeholder='Category'
                value={category}
                 onChange={e => setCategory(e.target.value)}>
                    <option>food</option>
                    <option>sport</option>
                    <option>education</option>
                    <option>entertaiment</option>
                    <option>bills</option>
                </select>
                <button>Create Entry</button>
            </form>            
        </div>
    )
}

export default AddExpenseForm
