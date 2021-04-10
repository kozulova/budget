import React, {crateContext, createContext, useReducer} from 'react';
import AppReducer from './AppReducer'
import axios from 'axios'

const initialState = {
    expenses: [
    ],
    userName: null
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
            console.log(res);
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
            await axios.delete(`expenses/${id}`);
            dispatch({
                type: 'DELETE_EXPENSE',
                payload: id
            })
        }catch(err){
            console.log(err);
        }
    }

    const setUserName = (userName) =>{
        dispatch({
            type: 'ADD_USERNAME',
            payload: userName
        })
    }

    return (<GlobalContext.Provider value={{state,  addExpense, getExpenses, setUserName, deleteExpence}}>{children}</GlobalContext.Provider>)
}