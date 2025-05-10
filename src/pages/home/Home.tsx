import React from 'react'
import {Link} from 'react-router-dom'

const contents = [
    {id: 1, title: 'Inception'},
    {id: 2, title: 'Interstellar'},
    {id: 3, title: 'The Dark Knight'}
]

export default function Home() {
    return (
        <div>
            <h1>Contents List</h1>
            <ul>
                {contents.map((content) => (
                    <li key={content.id}>
                        <Link to={`/content/${content.id}`}>{content.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
