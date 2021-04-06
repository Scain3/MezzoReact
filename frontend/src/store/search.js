import {fetch} from './csrf.js';

const SEARCH_STORIES = 'SEARCH_STORIES';
const SEARCH_AUTHORS = 'SEARCH_AUTHORS';

const searchStories = (stories) => ({
    type: SEARCH_STORIES,
    payload: stories
})

const searchAuthors = (authors) => ({
    type: SEARCH_AUTHORS,
    payload: authors
})

export const fetchSearchInfo = (term) => async(dispatch) => {
    const res = await fetch(`/api/search?term=${encodeURIComponent(term)}`)

    dispatch(searchStories(res.data.stories));
    dispatch(searchAuthors(res.data.authors));
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
