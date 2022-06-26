export const sendRequest = async (url, options) => {
    const response = await fetch(url, options)
    const responseData = await response.json()

    if (!response.ok) {
        throw new Error('Something went wrong! Try again later.')
    }

    return responseData
}
