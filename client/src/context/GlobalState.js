import React, {crateContext, createContext, useReducer} from 'react';
import AppReducer from './AppReducer'
import axios from 'axios'

const initialState = {
    expenses: [
    ],
    userName: null,
    editMode: false,
    editExpense: null
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {

    const [state, dispatch] = useReducer(AppReducer, initialState)

    const addExpense = async (expense) => {
        const config = {
            header: {
                'Content-Type': 'application/json'
            }
        }
        const res = await axios.post('/expenses', {...expense, userName: state.userName}, config)
        dispatch({
            type: 'ADD_EXPENSE',
            payload: res.data.data
        });
    }

    const getExpenses = async (date = new Date()) =>{
        try{
            const res = await axios.get('/expenses', {params:{userName: state.userName, date: date}});
            dispatch({
                type: 'GET_EXPENSES',
                payload: res.data.data
            })
            
        }catch(err){
            console.log(err)
        }
    }
    
    const deleteExpence = async (id) =>{
        try{
            await axios.delete(`/expenses/${id}`);
            dispatch({
                type: 'DELETE_EXPENSE',
                payload: id
            })
        }catch(err){
            console.log(err);
        }
    }

    const setUserName = async (userName) =>{
        try{
            const res = await axios.get(`/users/${userName}`);   
            dispatch({
                type: 'ADD_USERNAME',
                payload: userName
            })

        }catch(err){
            console.log(err);
            try{
            const res = await axios.post('users', {userName});
            dispatch({
                type: 'ADD_USERNAME',
                payload: userName
            })
        }catch(err){
            console.log(err);
        }
        }
    } 

    const Logout = () =>{
        dispatch({
            type: 'LOGOUT'
        })
    }

    const toogleExpense = (id) => {
        dispatch({
            type: 'TOOGLE_EXPENSE',
            payload: state.expenses.filter(expense => expense._id === id)
        });
    }

    const editExpense = async (expense) => {
        const config = {
            header: {
                'Content-Type': 'application/json'
            }
        }
        
        console.log(state.editExpense[0]._id);
        const res = await axios.put(`/expenses/${state.editExpense[0]._id}`, {id: state.editExpense[0]._id, ...expense, userName: state.userName}, config)
        dispatch({
            type: 'EDIT_EXPENSE',
            payload: res.data.data
        });
    }

    return (<GlobalContext.Provider value={{state,  addExpense, getExpenses, setUserName, deleteExpence, toogleExpense, editExpense, Logout}}>{children}</GlobalContext.Provider>)
}