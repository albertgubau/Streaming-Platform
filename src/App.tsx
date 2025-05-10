import React from 'react'

import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Layout from './layouts/Layout'
import Home from './pages/home/Home'
import ContentDetail from './pages/content-detail/ContentDetail'

import '../src/styles/global.css'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="content/:id" element={<ContentDetail />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
