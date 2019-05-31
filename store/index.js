import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import { book } from '../reducers';

const initialState = {
    books: [],
    text_search: "",
    searching: false,
    not_results: false,
};

export const Store = createStore(book, initialState, applyMiddleware(thunk));