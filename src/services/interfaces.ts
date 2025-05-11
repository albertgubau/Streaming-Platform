export interface ApiResponse {
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

export interface CustomError {
    errors: {
        message: string
    }[]
}
