import * as API from '../BeersAPI';

export const LOAD_QUERY_ITEMS = 'LOAD_QUERY_ITEMSY';
export const loadQuery = query => ({
    type: 'LOAD_QUERY',
    query,
});

export const fetchQuery = () => async dispatch => {};
