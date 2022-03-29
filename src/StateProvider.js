import React, { createContext, useContext, useReducer } from 'react';

export const StateContext = createContext();//preparing the Data Layer

export const StateProvider = ({ reducer, initialState, children }) =>
(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext);
//Hook allows us to pull data from the Data Layer