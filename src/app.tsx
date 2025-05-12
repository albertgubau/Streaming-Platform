import React from 'react'

import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Layout from './layouts/layout'
import Home from './pages/home/home'
import ContentDetailPage from './pages/content-detail/content-detail'
import ContentTrailerPage from './pages/content-trailer/content-trailer'

import '../src/styles/global.css'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="content/:id" element={<ContentDetailPage />} />
                    <Route path="content/:id/trailer" element={<ContentTrailerPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
