import {types} from '../../action/type'
import {type} from 'os'

export default (state=[], action) => {
    switch (action.type){
        case types.GET_POST:
            return action.payload
        default:
            return state
    }
}