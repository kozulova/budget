import React, {useState, useContext, useEffect} from 'react'
import {GlobalContext} from '../context/GlobalState'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AddExpenseForm = () => {
    const {addExpense, getExpenses, state, editExpense, toogleExpense} = useContext(GlobalContext);

    const [date, setDate] = useState(new Date());
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('Choose category');
    const [editMode, setEditMode] = useState(false);
    
    useEffect(()=>{
        if(state.editMode){
            setAmount(state.editExpense[0].amount);
            setCategory(state.editExpense[0].category);
            setEditMode(true);
        }
    }, [state]);

    const createEntry = (e) => {
        e.preventDefault();
        const newExpense = {date, amount, category};
        addExpense(newExpense);
        setAmount(0);
        setCategory('Choose category');
    }

    const findExpensesByDate = (e) => {
        setDate(e);
        getExpenses(e);
    }

    const editEntry = (e) => {
        e.preventDefault();
        const expenseToEdit = {date, amount, category};
        editExpense(expenseToEdit);
        toogleExpense(null);
        setAmount(0);
        setCategory('Choose category');
        setEditMode(false);
    }

    return (
        <div className="expencesForm">
            <Calendar value={date} onClickDay={findExpensesByDate}/>
            <form onSubmit={editMode ? editEntry : createEntry}>
                <input type="number" placeholder='Spent amount'
                 value={amount} onChange={(e) => setAmount(e.target.value)}/>
                <select placeholder='Category'
                value={category}
                 onChange={e => setCategory(e.target.value)}>
                    <option disabled>Choose category</option>
                    <option>food</option>
                    <option>sport</option>
                    <option>education</option>
                    <option>entertaiment</option>
                    <option>bills</option>
                </select>
                {editMode || <button onSubmit={createEntry}>Create Entry</button>}
                {editMode && <button onSubmit={editEntry}>Edit Entry</button>}
            </form>            
        </div>
    )
}

export default AddExpenseForm
