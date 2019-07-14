import { LOAD_MODAL_ITEM } from '../actions/modalItem';

const modalItemReducer = (state = null, action) => {
    const { modalItem } = action;
    switch (action.type) {
        case LOAD_MODAL_ITEM:
            return modalItem;
        default:
            return state;
    }
};

export default modalItemReducer;
