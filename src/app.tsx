import React from 'react'

import {BrowserRouter, Route, Routes} from 'react-router-dom'

import '../src/styles/global.css'

// Lazy load the components to improve performance and bundle size
const Layout = React.lazy(() => import('./layouts/layout'))
const Home = React.lazy(() => import('./pages/home/home'))
const ContentDetailPage = React.lazy(() => import('./pages/content-detail/content-detail'))
const ContentTrailerPage = React.lazy(() => import('./pages/content-trailer/content-trailer'))
const ErrorPage = React.lazy(() => import('./pages/error-page/error-page'))

const App = () => {
    return (
        <BrowserRouter>
            {/* ToDO: Implement a fallback for the Suspense */}
            <React.Suspense>
                <Routes>
                    <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
                        <Route index element={<Home />} />
                        <Route path="content/:id" element={<ContentDetailPage />} />
                        <Route path="content/:id/trailer" element={<ContentTrailerPage />} />
                        <Route path="*" element={<ErrorPage />} />
                    </Route>
                </Routes>
            </React.Suspense>
        </BrowserRouter>
    )
}

export default App
