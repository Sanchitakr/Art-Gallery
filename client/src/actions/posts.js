import * as api from '../api';

//Action Creaters - functions that create actions
//Action - object which has a type and a payload
//to retireive the action requires time as it is an asyc fuction
//hence use redux-thunk which allows to specify an additional arrow func

export const getPosts =() => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log (error.message);
    }
    
    
}

export const createPost = (post) => async (dispatch) => {
    try {
        const {data} = await api.createPost(post);
        dispatch({type:'CREATE', payload: data});
    
    } catch (error) {
        console.log(error.message);
        
    }
}