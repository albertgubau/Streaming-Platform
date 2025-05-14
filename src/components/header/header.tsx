import React from 'react'
import {HeaderStyled} from './header.styles'
import Logo from '../../assets/rakuten-logo.svg'
import {Link} from 'react-router-dom'

/**
 * Header of the application.
 */
export default function Header() {
    return (
        <HeaderStyled>
            <Link to="/">
                <Logo className="header-logo" />
            </Link>
        </HeaderStyled>
    )
}
