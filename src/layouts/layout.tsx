import React from 'react'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import {Outlet} from 'react-router-dom'

/**
 * This is the main layout of the application. It includes the header, main and footer tags.
 */
export default function Layout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
