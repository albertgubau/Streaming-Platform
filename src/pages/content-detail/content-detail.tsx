import React from 'react'
import {useParams} from 'react-router-dom'
import {getContentById} from '../../services/content-service'
import ReactPlayer from 'react-player'

export default function ContentDetail() {
    const {id} = useParams()
    const [content, setContent] = React.useState(null)
    const [error, setError] = React.useState('')
    const [showPlayer, setShowPlayer] = React.useState(false)

    React.useEffect(() => {
        const fetchData = async (id: string) => {
            try {
                const response = await getContentById(id)
                setContent(response)
            } catch (error) {
                setError((error as Error).message)
            }
        }
        setShowPlayer(true)
        fetchData(id ?? '')
    }, [id])

    if (error) {
        return <p>There has been an error loading this content details</p>
    }

    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)

    return (
        <div>
            <h1>Content Title</h1>
            {showPlayer && (
                <ReactPlayer
                    key={id}
                    url={`https://cdn.bitmovin.com/content/assets/art-of-motion_drm/m3u8s/11331.m3u8`}
                    playing={true}
                    controls={true}
                    muted
                    width="100%"
                    height="100%"
                    config={{
                        file: {
                            forceSafariHLS: isSafari
                        }
                    }}
                />
            )}

            <p>ID: {id}</p>
        </div>
    )
}
