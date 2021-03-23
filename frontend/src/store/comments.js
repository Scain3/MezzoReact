import { fetch } from './csrf.js';

const SET_COMMENTS = "setComments";

const setComments = (comments) => ({
    type: SET_COMMENTS,
    payload: comments,
});

export const getComments = (storyId) => async (dispatch) => {
    const res = await fetch(`/api/stories/${storyId}/comments`);
    dispatch(setComments(res.data));
    return res;
};

export const postComment = (body, storyId) => async (dispatch) => {
    const res = await fetch(`api/stories/${storyId}/comment`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body,
    });
};

const initialState = { comments: null };

const commentReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_COMMENTS:
            newState = Object.assign({}, state, { comments: action.payload });
            return newState;
        default:
            return state;
    };
};

export default commentReducer;
