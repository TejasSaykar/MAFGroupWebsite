import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Helmet } from 'react-helmet'

const Layout = ({ children, description, keyword, author, title }) => {
    return (
        <>
            <Helmet>
                <meta charSet='utf-8' />
                <meta name='description' content={ description } />
                <meta name='keyword' content={ keyword } />
                <meta name='author' content={ author } />
                <title>{ title }</title>
            </Helmet>
            <div>
                <header className='fixed top-0 z-10 w-full bg-white shadow-md'>
                    <Navbar />
                </header>
                <main className='h-full'>{ children }</main>
                <footer>
                    <Footer />
                </footer>
            </div>
        </>
    )
}

export default Layout