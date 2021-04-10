export default (state, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            console.log(state)
            console.log(action.payload)
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
        default:
            return state; 
    }
}