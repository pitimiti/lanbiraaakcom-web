import queryString from 'query-string'

export const API_URL = process.env.API_URL

export const getPosts = async (params) => {
    let query = queryString.stringify(params)

    return fetch(API_URL + 'api/posts?' + query, {
        method: 'GET'
    })
        .then((response) => {
            return response.json()
        })
        .catch((err) => console.log(err))
}
