import { LOAD_ITEMS } from '../actions/items';

const itemsReducer = (state = [], action) => {
    const { items } = action;
    switch (action.type) {
        case LOAD_ITEMS:
            return items;
        default:
            return state;
    }
};

export default itemsReducer;
