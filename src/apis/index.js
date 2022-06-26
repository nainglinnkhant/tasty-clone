import { sendRequest } from '../utils'

const API_KEY = '7c22386fecmshe51d4222f7f72cdp1e471djsn70720f5ae3d1'

export const getRecentRecipes = ignoredOffset => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
            'X-RapidAPI-Key': API_KEY,
        },
    }

    return sendRequest(
        `https://tasty.p.rapidapi.com/recipes/list?from=${ignoredOffset}&size=20`,
        options,
    )
}

export const getFeeds = () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
            'X-RapidAPI-Key': API_KEY,
        },
    }

    return sendRequest(
        'https://tasty.p.rapidapi.com/feeds/list?size=5&timezone=%2B0700&vegetarian=false&from=0',
        options,
    )
}
