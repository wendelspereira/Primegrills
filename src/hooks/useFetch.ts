import useSWR from 'swr'
import api from '../services/api'

export function useFetch(id: string) {
    const { data, error } = useSWR(id, async id => {
        const response = await api.get(`/details?id=${id}`)

        return response.data
    })
    return { data, error }
}