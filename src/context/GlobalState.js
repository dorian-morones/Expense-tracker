import React, { createContext, useReducer } from 'react';
import AppReducer from "./AppReducer.js";

//Inital State
const initialState = {
    transactions: [

        ]
}

//Create Context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    //Actions
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }
    function addTransaction(transactions){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transactions
        });
    }

    return (
    <GlobalContext.Provider value={{
        transactions:state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        { children }
    </GlobalContext.Provider>
    )
}