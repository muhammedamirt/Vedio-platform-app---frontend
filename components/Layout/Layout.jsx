import React from 'react'
import NavBar from '../NaveBar/NavBar';


const Layout = ({ children }) => {
    return (
        <div>
            <div className='sticky w-full z-50 top-0'>
                <NavBar />
            </div>
            <div className='min-h-[100vh] py-10 px-10 w-full'>
                {children}
            </div>
        </div>
    )
}

export default Layout