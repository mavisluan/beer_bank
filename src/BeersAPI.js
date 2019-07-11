import axios from "axios";

const api = "https://api.punkapi.com/v2/beers"

export const getAll = async () => {
    return await axios.get(`${api}`)
}

export const getById = async (id) => {
    return await axios.get(`${api}/${id}`)
}

export const search = async (query) => {
    return await axios.get(`${api}?beer_name=${query}`)
}