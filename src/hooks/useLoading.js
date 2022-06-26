import { useState, useCallback } from 'react'

const useLoading = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchData = useCallback(async fetchFunc => {
        setError(null)
        setLoading(true)

        try {
            await fetchFunc()
        } catch (err) {
            setError(err)
        }

        setLoading(false)
    }, [])

    return {
        loading,
        error,
        setError,
        fetchData,
    }
}

export default useLoading
