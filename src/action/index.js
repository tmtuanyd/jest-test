import {types} from './type'
import axios from 'axios'

export const fetchPosts = () => async (dispatch) => {
    await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
        .then (res => {
            console.log(res)
            dispatch({
                type: types.GET_POST,
                payload: res.data
            })
        })
        .catch(err => {
            console.log(err)
        })
}
