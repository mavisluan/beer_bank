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
    // const [searchData, setSearchData] = useState([]);

    const formatData = results =>
        results.map(item => {
            // eslint-disable-next-line camelcase
            const { id, image_url, name, tagline, ibu, abv, ebc, description, food_pairing } = item;
            return { id, image_url, name, tagline, ibu, abv, ebc, description, food_pairing, favorite: false };
        });

    useEffect(() => {
        const localItems = JSON.parse(localStorage.getItem('localItems'));
        if (!localItems) {
            const fetchAll = async () => {
                const results = await BeersAPI.getAll();
                localStorage.setItem('localItems', JSON.stringify(formatData(results.data)));
                setData({ items: formatData(results.data) });
            };
            fetchAll();
        } else {
            setData({ items: localItems });
        }
    }, []);

    const fetchSimilars = async modalItem => {
        const results = await BeersAPI.findSimilars(modalItem.abv);
        const similarData = formatData(results.data).filter(item => item.id !== modalItem.id);
        setSimilarData(similarData);
    };

    const fetchModalItem = async id => {
        await BeersAPI.getById(id)
            .then(results => results.data[0])
            .then(modalItem => {
                setModalItem(modalItem);
                fetchSimilars(modalItem);
            });
    };

    const toggleFavorite = id => {
        const localItems = JSON.parse(localStorage.getItem('localItems'));
        const newItems = localItems.map(item => {
            if (item.id === id) {
                item.favorite = !item.favorite;
            }
            return item;
        });
        localStorage.setItem('localItems', JSON.stringify(newItems));
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
