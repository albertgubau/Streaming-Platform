import React from 'react'

import {ErrorPageWrapper} from './error-page.styles'
import {Link} from 'react-router-dom'

export default function ErrorPage() {
    const isHomePage = location.pathname === '/'

    return (
        <ErrorPageWrapper>
            <ErrorPageWrapper>
                {isHomePage ? (
                    <h2>Oh no! Something went wrong, please try again later.</h2>
                ) : (
                    <>
                        <h2>Oh no! There has been an error!</h2>
                        <Link to="/">Link to the home page</Link>
                    </>
                )}
            </ErrorPageWrapper>
        </ErrorPageWrapper>
    )
}
