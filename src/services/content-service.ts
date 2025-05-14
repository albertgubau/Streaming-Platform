import {ContentList} from '../components/content-list/interfaces'
import {ContentDetail} from '../pages/content-detail/interfaces'
import {
    convertListsApiResponseToContentList,
    convertMoviesApiResponseToContentDetail
} from './convert-api-to-implementation'

const BASE_URL = 'https://gizmo.rakuten.tv/v3/'

/**
 * Fetches a content list from the API.
 * @param listId - The ID of the content list to fetch.
 * @param additionalQueryParams - (Optional) - Additional query parameters to include in the request.
 * @returns A promise that resolves to the content list.
 */
export const getContentList = async (
    listId: string,
    additionalQueryParams?: Record<string, string>
): Promise<ContentList> => {
    const queryParams = new URLSearchParams({
        classification_id: '5',
        device_identifier: 'web',
        locale: 'es',
        market_code: 'es',
        ...additionalQueryParams
    }).toString()

    const url = `${BASE_URL}lists/${listId}?${queryParams}`

    try {
        const response = await fetch(url)

        const result = await response.json()

        if (!response.ok) throw result

        const convertedResponse = convertListsApiResponseToContentList(result.data)

        return convertedResponse
    } catch (error) {
        throw error
    }
}

/**
 *
 * @param contentId - The ID of the content to fetch.
 * @param additionalQueryParams - (Optional) - Additional query parameters to include in the request.
 * @returns
 */
export const getContentById = async (
    contentId: string,
    additionalQueryParams?: Record<string, string>
): Promise<ContentDetail> => {
    const queryParams = new URLSearchParams({
        classification_id: '5',
        device_identifier: 'web',
        locale: 'es',
        market_code: 'es',
        ...additionalQueryParams
    }).toString()

    const url = `${BASE_URL}movies/${contentId}?${queryParams}`

    try {
        const response = await fetch(url)

        const result = await response.json()

        if (!response.ok) throw result

        const convertedResponse = convertMoviesApiResponseToContentDetail(result.data)

        return convertedResponse
    } catch (error) {
        throw error
    }
}
