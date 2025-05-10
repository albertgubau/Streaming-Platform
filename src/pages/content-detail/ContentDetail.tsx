import React from 'react'
import {useParams} from 'react-router-dom'

export default function ContentDetail() {
    const {id} = useParams()

    return (
        <div>
            <h1>Content details</h1>
            <p>ID: {id}</p>
        </div>
    )
}
