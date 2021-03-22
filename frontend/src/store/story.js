import { fetch } from "./csrf.js";

const SET_STORY = "setStory";

const setStory = (story) => ({
	type: SET_STORY,
	payload: story,
});

export const getStory = (id) => async (dispatch) => {
	const res = await fetch(`/api/stories/${id}`);
	dispatch(setStory(res.data));
	return res;
};

const initialState = { story: null };

const storyReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_STORY:
            newState = Object.assign({}, state, {story: action.payload});
            return newState;
        default:
            return state;
    };
};

export default storyReducer;
