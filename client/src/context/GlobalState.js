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

    const getExpenses = async () =>{
        try{
            const res = await axios.get('/expenses');
            dispatch({
                type: 'GET_EXPENSES',
                payload: res.data.data
            })
            
        }catch(err){
            console.log(err)
        }
    }

    const setUserName = (userName) =>{
        dispatch({
            type: 'ADD_USERNAME',
            payload: userName
        })
    }

    return (<GlobalContext.Provider value={{state,  addExpense, getExpenses, setUserName}}>{children}</GlobalContext.Provider>)
}