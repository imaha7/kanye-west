import { VISIBILITY_FILTERS } from "../constants";

export const getQuotesState = store => store.todos;

export const getQuotesList = store =>
    getQuotesState(store) ? getQuotesState(store).allIds : [];

export const getQuotesById = (store, id) =>
    getQuotesState(store) ? { ...getQuotesState(store).byIds[id], id } : {};

/**
 * example of a slightly more complex selector
 * select from store combining information from multiple reducers
 */
export const getQuotes = store =>
    getQuotesList(store).map(id => getQuotesById(store, id));

export const getQuotesByVisibilityFilter = (store, visibilityFilter) => {
    const allQuotes = getQuotes(store);
    switch (visibilityFilter) {
        case VISIBILITY_FILTERS.COMPLETED:
            return allQuotes.filter(quote => quote.completed);
        case VISIBILITY_FILTERS.INCOMPLETE:
            return allQuotes.filter(quote => !quote.completed);
        case VISIBILITY_FILTERS.ALL:
        default:
            return allQuotes;
    }
};
