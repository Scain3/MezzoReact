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