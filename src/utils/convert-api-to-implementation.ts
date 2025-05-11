import {ApiResponse} from '../services/interfaces'
import {ContentList} from '../components/content-list/interfaces'

export const convertApiResponseToContentList = (apiResponse: ApiResponse): ContentList => {
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
