export const API_URL = process.env.API_URL

/**
 * Given a image object return the proper path to display it
 * Provides a default as well
 * @param {any} image
 */
export const fromImageToUrl = (image) => {
    if (!image) {
        return '/images/logo.svg' //Or default image here
    }
    if (image.url.indexOf('/') === 0) {
        //It's a relative url, add API URL
        return `${API_URL}${image.url}`
    }

    return image.url
}
