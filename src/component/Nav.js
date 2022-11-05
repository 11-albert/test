import React, { useEffect } from 'react'
import Button from './Button'
import { useState } from 'react';

const Nav = () => {
    let Links = [
        {name: "HOME",link:"/"},
        {name: "SERVICE",link:"/"},
        {name: "ABOUT",link:"/"},
        {name: "CONTACT",link:"/"},
    ];
    let [open,setOpen]=useState(false);
    let [sticky,setSticky]=useState(false)
    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            const nav = document.querySelector("nav");
            window.scrollY > 0 ? setSticky(true): setSticky(false)
        })
    },[])
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
        <div className={`md:flex items-center justify-between  py-4 md:px-10 px-7 ${sticky ? 'bg-indigo-100 text-white':'bg-white text-black'} `}>
            <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins]'>
                <span>
                    
                </span>
                nav
            </div>
            <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                {/* <i class={open ? "fa-solid fa-bars":"fa-solid fa-xmark"}></i> */}
                <ion-icon name={open ? 'close': 'menu'}></ion-icon>
            </div>
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500  ease-in ${open ? 'top-20 opacity-100':'top-[-490px] md:opacity-100 opacity-0'} `}>
                {Links.map((Link)=>(
                    <li key={Link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                        <a href={Link.link} className="text-gray-800 hover:text-gray-400 duration-500">{Link.name}</a>
                    </li>
                ))}
                <Button>
                    Get Started
                </Button>
                
            </ul>
        </div>
       
    </div>
   
  )
}

export default Nav