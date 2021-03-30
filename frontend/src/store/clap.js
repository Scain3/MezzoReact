import { fetch } from './csrf.js';

const SET_CLAPS = "setClaps";

const setClaps = (claps) => ({
    type: SET_CLAPS,
    payload: claps
});

export const getClaps = (storyId) => async (dispatch) => {
    const res = await fetch(`/api/stories/${storyId}/claps`);
    dispatch(setClaps(res.data));
    return res;
};

const initialState = { claps: null };

const clapReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_CLAPS:
            newState = Object.assign({}, state, {claps: action.payload});
            return newState;
        default:
            return state;
    };
};

export default clapReducer;