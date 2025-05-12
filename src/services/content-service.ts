import {ContentList} from '../components/content-list/interfaces'
import {
    convertListsApiResponseToContentList,
    convertMoviesApiResponseToContentDetail
} from './convert-api-to-implementation'
import {CustomError} from './interfaces'

const BASE_URL = 'https://gizmo.rakuten.tv/v3/'

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
    } catch (e) {
        throw new Error((e as CustomError).errors[0].message)
    }
}

export const getContentById = async (
    contentId: string,
    additionalQueryParams?: Record<string, string>
) => {
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
    } catch (e) {
        throw new Error((e as CustomError).errors[0].message)
    }
}
