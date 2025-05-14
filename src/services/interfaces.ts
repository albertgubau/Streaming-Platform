/**
 * This is the interface describing the structure of the API response for the lists.
 */
export interface ListsApiResponse {
    name: string
    contents: {
        data: {
            type: string
            id: string
            numerical_id: string
            title: string
            short_plot: string
            images: {
                standard_artwork: string
            }
        }[]
    }
}

/**
 * This is the interface describing the structure of the API response for the movies.
 */
export interface MoviesApiResponse {
    id: string
    title: string
    short_plot: string
    images: {
        snapshot: string
    }
}
