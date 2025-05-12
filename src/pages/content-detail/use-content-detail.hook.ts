import React from 'react'
import {useParams} from 'react-router-dom'
import {ContentDetail} from './interfaces'
import {getContentById} from '../../services/content-service'

export default function useContentDetail() {
    const {id} = useParams()
    const [content, setContent] = React.useState<ContentDetail | null>(null)
    const [error, setError] = React.useState('')

    React.useEffect(() => {
        const fetchData = async (id: string) => {
            try {
                const response = await getContentById(id)
                setContent(response)
            } catch (error) {
                setError((error as Error).message)
            }
        }
        fetchData(id ?? '')
    }, [id])

    return {content, error}
}
