import {fetch} from './csrf.js';

const SEARCH_STORIES = 'SEARCH_STORIES';

const searchStories = (stories) => ({
    type: SEARCH_STORIES,
    payload: stories
})

export const fetchSearchInfo = (term) => async(dispatch) => {
    const res = await fetch(`/api/search?term=${encodeURIComponent(term)}`)

    // const data = await res.json();
    // const story = data.stories;

    dispatch(searchStories(res.data.stories));
}

const initialState = {story: null};

const searchReducer = (state= initialState, action) => {
    switch(action.type){
        case SEARCH_STORIES:
            return { ...state, story: action.payload}
        default:
            return state;
    }
}

export default searchReducer;
