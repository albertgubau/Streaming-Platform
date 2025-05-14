import React from 'react'
import {useParams} from 'react-router-dom'
import {ContentDetail} from './interfaces'
import {getContentById} from '../../services/content-service'

export default function useContentDetail() {
    // Retrieve the content ID from the URL parameters
    const {id} = useParams()
    const [content, setContent] = React.useState<ContentDetail | null>(null)
    const [error, setError] = React.useState<string | null>(null)

    React.useEffect(() => {
        const fetchData = async (id: string) => {
            try {
                // Fetch the content by ID and update the content state
                const response = await getContentById(id)
                setContent(response)
            } catch (error) {
                setError(error as string)
            }
        }
        fetchData(id ?? '')
    }, [id])

    return {content, error}
}
