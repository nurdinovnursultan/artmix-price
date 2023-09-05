import axios from "axios"

export function getProducts(value) {
    return async (dispatch) => {
        const { data } = await axios(`http://localhost:8000/products?articul=${value}`)
        dispatch({
            type: "GET_PRODUCTS",
            payload: data
        })
    }
}