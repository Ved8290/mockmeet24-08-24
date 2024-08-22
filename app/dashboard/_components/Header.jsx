"use client"
import React, { useEffect } from 'react'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image';

import { usePathname } from 'next/navigation'


function Header() {

  const path=usePathname();
  useEffect(()=>{

  },[])
  return (
    <div className="flex p-4 justify-between items-center bg-secondary shadow-sm">
       
    {/*     <Image src={'./logo.png'} width={160} height={100} alt="logo"/>   */}
    <h1 className='font-bold text-2xl text-indigo-700'> MockMeet </h1>
      <ul className='hidden md:flex gap-7 '>
        <li className={`hover:text-primary hover:font-bold cursor-pointer transition-all ${path=='/'&&'text-primary font-bold'}`} ><a href='/'>Home</a></li>
        <li className={`hover:text-primary hover:font-bold cursor-pointer transition-all ${path=='/dashboard'&&'text-primary font-bold'}`} ><a href='/dashboard'>Dashboard</a></li>

     
        <li className={`hover:text-primary hover:font-bold cursor-pointer transition-all ${path=='/aboutus'&&'text-primary font-bold'}`} > <a href='/aboutus'> About us</a> </li>
        <li className={`hover:text-primary hover:font-bold cursor-pointer transition-all ${path=='/ContactUs'&&'text-primary font-bold'}`} > <a href='/ContactUs'> Contact Us</a> </li>
         {/* <li className='hover:text-primary hover:font-bold cursor-pointer transition-all'>How it Works..?</li>
     */ }
        
      </ul>
      
      <UserButton />
     
    </div>
    
  )
}

export default Header
