import {combineReducers} from 'redux'

import amount from './amount'
import charge from './charge'

export default combineReducers({
    amount: amount,
    charge: charge
})