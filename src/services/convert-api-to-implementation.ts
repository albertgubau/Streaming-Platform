import {ListsApiResponse, MoviesApiResponse} from './interfaces'
import {ContentList} from '../components/content-list/interfaces'
import {ContentDetail} from '../pages/content-detail/interfaces'

/**
 *
 * @param apiResponse - The API response object containing the list data.
 * @returns A ContentList object.
 */
export const convertListsApiResponseToContentList = (
    apiResponse: ListsApiResponse
): ContentList => {
    return {
        listTitle: apiResponse.name,
        contents: apiResponse.contents.data.map((content) => ({
            id: content.id,
            title: content.title,
            plot: content.short_plot,
            imageSrc: content.images.standard_artwork
        }))
    }
}

/**
 * Converts the Movies API response to a ContentDetail object.
 * @param apiResponse - The Movies API response object.
 * @returns A ContentDetail object.
 */
export const convertMoviesApiResponseToContentDetail = (
    apiResponse: MoviesApiResponse
): ContentDetail => {
    return {
        id: apiResponse.id,
        title: apiResponse.title,
        plot: apiResponse.short_plot,
        imageSrc: apiResponse.images.snapshot
    }
}
