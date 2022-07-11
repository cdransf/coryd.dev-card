import { read } from 'feed-reader'
import { useEffect, useState } from 'react'
import useSWR from 'swr'

export const useRss = (url: string) => {
    const [response, setResponse] = useState([])

    const fetcher = (url: string) =>
        read(url)
            .then((res) => res.entries)
            .catch()
    const { data, error } = useSWR(url, fetcher)

    useEffect(() => {
        setResponse(data)
    }, [data, setResponse])

    return {
        response,
        error,
    }
}
