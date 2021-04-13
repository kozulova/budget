export default (state, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: [action.payload, ...state.expenses]
            }
        case 'GET_EXPENSES':
            return{
                ...state,
                expenses: action.payload
            }    
        case 'ADD_USERNAME':
            return{
                ...state,
                userName: action.payload
            } 
        case 'DELETE_EXPENSE':
            return{
                ...state,
                expenses: state.expenses.filter(expense=>expense._id !== action.payload)
            }
        case 'TOOGLE_EXPENSE':
            return{
                ...state,
                editMode: !state.editMode,
                editExpense: action.payload || null
            }
        case 'EDIT_EXPENSE':
            const editedExpense = action.payload;
            return{
                ...state,
                expenses: state.expenses.map(expense => editedExpense._id === expense._id ? editedExpense : expense)
            } 
        case 'LOGOUT':
            return{
                ...state,
                userName: null
            }             
        default:
            return state; 
    }
}