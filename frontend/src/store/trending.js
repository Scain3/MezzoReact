import { fetch } from './csrf.js';

const SET_TRENDING = "setTrending";

const setTrending = (stories) => ({
    type: SET_TRENDING,
    payload: stories,
});

export const getTrendingStories = () => async (dispatch) => {
    const res = await fetch('/api/stories/trending', {method: 'GET'});
    dispatch(setTrending(res.data));
    return res;
};

const initialState = { stories: null };

const trendingReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_TRENDING:
            newState = Object.assign({}, state, { stories: action.payload });
            return newState;
        default:
            return state;
    };
};

export default trendingReducer;
