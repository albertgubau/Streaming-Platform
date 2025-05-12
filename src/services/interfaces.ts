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

export interface MoviesApiResponse {
    id: string
    title: string
    short_plot: string
    images: {
        snapshot: string
    }
}

export interface CustomError {
    errors: {
        message: string
    }[]
}
