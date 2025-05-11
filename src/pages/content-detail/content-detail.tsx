import React from 'react'
import {useParams} from 'react-router-dom'
import {getContentById} from '../../services/content-service'

export default function ContentDetail() {
    const {id} = useParams()
    const [content, setContent] = React.useState(null)
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

    if (error) {
        return <p>There has been an error loading this content details</p>
    }

    return (
        <div>
            <h1>Content details</h1>
            <p>ID: {id}</p>
            {JSON.stringify(content)}
        </div>
    )
}
