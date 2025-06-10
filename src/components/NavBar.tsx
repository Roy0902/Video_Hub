"use client"

import Link from "next/link";
import Image from "next/image";
import menu from '/public/logo-menu.png'
import React from "react";

const NavBar: React.FC = () =>{
    return(
        <nav className='fixed h-full w-18 shadow-xl bg-white'>
            <div className='flex-col items-center h-full w-full px-4 3xl:px-12'>
                <Link href='/' className='px-4 3xl:px-12'>
                    <Image src={menu}
                            alt='menu'
                            width={75}
                            height={75}
                            className="cursor-pointer"
                            priority/>
                </Link>
            </div>
         </nav>
    )
}

export default NavBar;