import axios from 'axios';

const api = 'https://api.punkapi.com/v2/beers';

export const getAll = async () => axios.get(`${api}`);

export const getById = async id => axios.get(`${api}/${id}`);

export const search = async query => axios.get(`${api}?beer_name=${query}`);

// eslint-disable-next-line prettier/prettier
export const findSimilars = async abv => axios.get(`${api}?abv_gt=${abv - 0.1}&abv_lt=${abv + 0.1}`);