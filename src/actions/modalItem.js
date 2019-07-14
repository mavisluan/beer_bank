import * as API from '../BeersAPI';

export const LOAD_MODAL_ITEM = 'LOAD_MODAL_ITEM';
export const loadModalItem = modalItem => ({
    type: LOAD_MODAL_ITEM,
    modalItem,
});

export const fetchModalItem = id => async dispatch => {
    const modalItem = await API.getById(id).data[0];
    dispatch(loadModalItem(modalItem));
};
