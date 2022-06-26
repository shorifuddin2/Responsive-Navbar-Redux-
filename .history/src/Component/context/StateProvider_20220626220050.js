import React, {createContext, useContext, useReducer} from "react";

export const StateContext = createContext();

export const StateProvider =({export const , initialState = (state = , action) => {
    switch (action.type) {
        case 'ACTION_TYPE':
            return 
        default:
            return state
    }
}})