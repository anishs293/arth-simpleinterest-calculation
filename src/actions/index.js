import { types } from './types';
import axios from 'axios';

export const fetchPosts = () => async (dispatch) => {
    await axios.get('https://reqres.in/api/users?page=2')
    .then(res => {
        dispatch({
            type: types.GET_POSTS,
            payload: res.data
        })
    })
    .catch(err => {
        // console.log(err);
    })
};

export const fetchAddition = () => async (dispatch) => {
    await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
    .then(res => {
        dispatch({
            type: types.GET_ADDITION,
            payload: res.data
        })
    })
    .catch(err => {
        // console.log(err);
    })
};
