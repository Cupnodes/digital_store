import React from 'react'
import Logo from './Logo.jsx'
import Search from './Search.jsx'
import Market from './Market.jsx'


export default function Header() {
    return (
        <React.Fragment>
            <header>
                <div className=' w-screen flex justify-evenly items-center py-10  bg-[--light-gray]'>
                    <Logo/>
                    <Search/>                    
                    <Market/>                    
                </div>
            </header>
        </React.Fragment>
    )
}
