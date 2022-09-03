import { ADD_QUOTES, TOGGLE_QUOTES, SET_FILTER } from "./actionType";

let nextQuotesId = 0;

export const addQuotes = content => ({
    type: ADD_QUOTES,
    payload: {
        id: ++nextQuotesId,
        content
    }
});

export const toggleQuotes = id => ({
    type: TOGGLE_QUOTES,
    payload: { id }
});

export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });
