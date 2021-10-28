import *as actionTypes from './actionTypes'
import { isEmpty } from 'lodash/isEmpty'

const initState = {
    isAuth:false,
    user:{}
}

export default (state=initState,action)=>{
    console.log(action.payload,'11',action)
    switch(action.type){
        case actionTypes.SYNC_STATE_INFO:
            return {
                isAuth:JSON.stringify(action.payload) == "{}"?false:true,
                user:action.payload
            };
        default:
            return state;
    }
}