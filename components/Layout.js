import React from 'react'
import NavBar from './NavBar'
import Notify from './Notify'
import Modal from './Modal'
import Footer from "../components/Footer"
import Head from "next/Head"
import Link from 'next/Link'
function Layout({children}) {
    return (
        <div className="container">
            <Head>
            <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css" />
            <link href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700" rel="stylesheet" type="text/css" />
            <link href="/styles/styles.css" rel="stylesheet" />
            </Head>
            <NavBar />
            <Notify />
            <Modal />
            {children}
            <Footer/>
        </div>
    )
}

export default Layout
