import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/actions';

const MainPage = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.products)

    const [search, setSearch] = useState("")

    useEffect(() => {
        dispatch(getProducts(search))
    }, [search])

    return (
        <div className="container">
            <div className="header">
                <input placeholder='Search...'
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            {
                products ?
                    products.map(item => <div key={item.id} className="item">
                        <h1>{item.articul}</h1><p>Min: {item.minPrice}сом Max: {item.maxPrice}сом</p>
                    </div>)
                    :
                    null
            }
        </div>
    );
};

export default MainPage;