import {createStore} from 'redux';
const initialState = {
    Products: [],
    cart:[],
    userDetails:{},
    isSideBarOpen: true,
}
const reducer = (initialState, action) =>{
    switch(action.type){
        case 'SET_PRODUCTS':
            return {...initialState, Products:action.payload}
        case 'UPDATE_CART':
            return {...initialState, cart: action.payload}
        case 'ADD_TO_CART':
            return {...initialState,cart:action.payload}
        case 'ADD_USER_DETAILS':
            return {...initialState,userDetails:action.payload}
        case 'OPEN_SIDEBAR':
            return {...initialState,isSideBarOpen: true}
        case 'CLOSE_SIDEBAR':
            return {...initialState,isSideBarOpen: false}
        default :
            return initialState;
    }
       
}
export const store = createStore(reducer,initialState);
