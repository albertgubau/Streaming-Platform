/**
 * Describes the ContentList UI element properties
 */
export interface ContentList {
    listTitle: string
    contents: {
        id: string
        title: string
        plot: string
        imageSrc: string
    }[]
}
