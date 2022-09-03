import React, { useState } from 'react'
import Logo from "../../assets/Logo.png";
import { Link } from 'react-router-dom'
import NavLinks from './NavLinks';
import Button from '../Button';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {

    const [open, setOpen ] = useState(false)
  return (
    <nav className='bg-white'>
        <div className='flex font-medium items-center justify-around'>
            <div className='z-50 p-5 md:w-auto w-full flex justify-between'>
                <img src={Logo} alt='logo' className='md:cursor-pointer h-9' />
                <div className='text-3xl md:hidden cursor-pointer' onClick={() => setOpen(!open)}>
                    {!open ? 
                        <AiOutlineMenu /> :
                        <AiOutlineClose />
                    }
                </div>
            </div>
            <ul className='md:flex hidden uppercase items-center gap-8 font-[Poppins]'>
                <li>
                    <Link to='/' className='py-7 px-3 inline-block'>
                        Home
                    </Link>
                </li>
                <NavLinks />
            </ul>
            <div className='md:block hidden'>
                <Button />
            </div>
            <ul className={`md:hidden bg-white fixed w-full h-full top-0 bottom-0 overflow-y-auto py-24
            pl-4 duration-500 ${open ? "left-0" : "left-[100%]"}
            `}>
            <li>
                <Link to='/' className='py-7 px-3 inline-block'>
                    Home
                </Link>
            </li>
            <NavLinks />
            <div className='py-5'>
                <Button />
            </div>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar