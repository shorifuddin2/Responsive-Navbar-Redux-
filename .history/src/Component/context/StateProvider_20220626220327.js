import React, {createContext, useContext, useReducer} from "react";

export const StateContext = createContext();

export const StateProvider =({reducer, initialState, childrenn})=>{
    <StateContext.Provider value={useReducer(reducer, initialState)}></StateContext.Provider>
}