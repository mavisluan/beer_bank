/* eslint-disable no-console */
/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as BeersAPI from '../BeersAPI';

export const ItemsContext = React.createContext();
export const ItemsStore = ({ children }) => {
    const [data, setData] = useState({ items: [] });
    const [query, setQuery] = useState('');
    const [similarData, setSimilarData] = useState([]);
    const [modalItem, setModalItem] = useState(null);

    const formatData = results =>
        results.map(item => {
            // eslint-disable-next-line camelcase
            const { id, image_url, name, tagline, ibu, abv, ebc, description, food_pairing } = item;
            return { id, image_url, name, tagline, ibu, abv, ebc, description, food_pairing, favorite: false };
        });

    useEffect(() => {
        if (query === '') {
            const fetchAll = async () => {
                const results = await BeersAPI.getAll();
                setData({ items: formatData(results.data) });
            };
            fetchAll();
        } else {
            const searchData = async () => {
                const results = await BeersAPI.search(query);
                setData({ items: results.data });
            };
            searchData();
        }
    }, [query]);

    const fetchSimilars = async abv => {
        const results = await BeersAPI.findSimilars(abv);
        setSimilarData(formatData(results.data));
    };

    const fetchModalItem = async id => {
        await BeersAPI.getById(id)
            .then(results => results.data[0])
            .then(modalItem => {
                setModalItem(modalItem);
                fetchSimilars(modalItem.abv);
            });
    };

    const toggleFavorite = id => {
        const newItems = data.items.map(item => {
            if (item.id === id) {
                item.favorite = !item.favorite;
            }
            return item;
        });
        setData({ items: newItems });
    };

    const favoriteItems = data.items.filter(item => item.favorite);

    return (
        <ItemsContext.Provider
            value={{
                items: data.items,
                similarItems: similarData,
                modalItem,
                setModalItem,
                setSimilarData,
                setQuery,
                query,
                fetchModalItem,
                toggleFavorite,
                favoriteItems,
            }}
        >
            {children}
        </ItemsContext.Provider>
    );
};

ItemsStore.propTypes = {
    children: PropTypes.node,
};
