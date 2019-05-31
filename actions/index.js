import { SEARCH_BOOKS, SET_LOADING_STATUS, SET_BOOKS, SET_NOT_RESULTS } from '../constants';

import { getParsedBooks } from '../services/getParsedBooks';

// Actions
export const searchBooks = payload => ({ type: SEARCH_BOOKS, payload });
export const setLoadingStatus = payload => ({ type: SET_LOADING_STATUS, payload });
const setBooks = payload => ({ type: SET_BOOKS, payload });
const setNotResults = payload => ({ type: SET_NOT_RESULTS, payload });

// Selectors
export const findBooks = () => {
    return (dispatch, getState) => {        
        dispatch(setLoadingStatus(true));
        
        const state = getState();

        if(state.text_search != "") {
            return getParsedBooks(state.text_search, 20, 0).then(books => {
                dispatch(setLoadingStatus(false));

                if(books.length) {
                    dispatch(setBooks(books));
                    dispatch(setNotResults(false));

                } else {
                    dispatch(setBooks([]));
                    dispatch(setNotResults(true));
                }

            });
        } else {
            dispatch(setBooks([]));
            dispatch(setLoadingStatus(false));
            dispatch(setNotResults(false));
        }
        
    };
};

export const getSearching = state => state.searching;
export const getBooks = state => state.books;
export const getNotResults = state => state.not_results;
