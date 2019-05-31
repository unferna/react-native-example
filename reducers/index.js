import { SEARCH_BOOKS, SET_LOADING_STATUS, SET_BOOKS, SET_NOT_RESULTS } from '../constants';

export const book = (state = {}, action) => {
    switch(action.type) {
        case SEARCH_BOOKS:
            const text_search = action.payload;
            return { ...state, text_search };
        
        case SET_LOADING_STATUS:
            const searching = action.payload;
            return { ...state, searching };

        case SET_BOOKS:
            const books = action.payload;
            return { ...state, books };

        case SET_NOT_RESULTS:
            const not_results = action.payload;
            return { ...state, not_results };

        default:
            return state;
    }
};