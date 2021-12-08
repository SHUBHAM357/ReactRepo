import {ActionTypes}  from '../constants/constants'


export function incrementCounter(){
  return {type:ActionTypes.INCREMENT_COUNTER}
}

export function decrementCounter(){
    return {type:ActionTypes.DECREMENT_COUNTER}
}

export function changeToINR(){
    return {type:ActionTypes.INR_CURRENCY}
}

export function changeToUSD(){
    return {type:ActionTypes.USD_CURRENCY}
}