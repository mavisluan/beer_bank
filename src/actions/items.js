import * as API from '../BeersAPI';

export const LOAD_ITEMS = 'LOAD_ITEMS';

export const loadItems = items => ({
    type: LOAD_ITEMS,
    items,
});

export const fetchItems = () => async dispatch => {
    const items = await API.getAll();
    dispatch(loadItems(items));
};
