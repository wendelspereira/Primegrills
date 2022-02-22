import axios from 'axios'
import {ProductData} from '../contexts/ProductContext'
import api from './api'

export async function getProducts() {
    const { data } = await api.get('/products')
    return data as ProductData[]
}
