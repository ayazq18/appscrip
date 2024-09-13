import axios from "axios"

export const GetAllProducts = async () => {
    const url = 'https://fakestoreapi.com/products'

    try {
        const response = await axios.get(url)
        if (response) {
            return response
        }
    } catch (error) {
        console.error('message : ', error)
    }
}

export const GetAllProductsById = async (id) => {
    const url = `https://fakestoreapi.com/products/${id}`

    try {
        const response = await axios.get(url)
        if (response) {
            return response
        }
    } catch (error) {
        console.error('message : ', error)
    }
}