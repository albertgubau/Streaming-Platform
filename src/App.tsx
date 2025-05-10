import React from 'react'

import '../src/styles/global.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

const App = () => {
    return (
        // Router will go here
        <>
            <Header />
            <main>Body</main>
            <Footer />
        </>
    )
}

export default App
