"use client"
import React, { useEffect } from 'react'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import { usePathname } from 'next/navigation'


function Header() {

  const path=usePathname();
  useEffect(()=>{

  },[])
  return (
    <div className="flex p-4 justify-between items-center bg-secondary shadow-sm">
       
    {/*     <Image src={'./logo.png'} width={160} height={100} alt="logo"/>   */}
      <ul className='hidden md:flex gap-7 '>
        <li className={`hover:text-primary hover:font-bold cursor-pointer transition-all ${path=='/dashboard'&&'text-primary font-bold'}`} ><a href='/dashboard'>Dashboard</a></li>
      {/* 
      
        <li className='hover:text-primary hover:font-bold cursor-pointer transition-all'>Questions</li>
        <li className='hover:text-primary hover:font-bold cursor-pointer transition-all'>Upgrade</li>
        <li className='hover:text-primary hover:font-bold cursor-pointer transition-all'>How it Works..?</li>
     */ }
        
      </ul>
      
      
      <UserButton />
     
    </div>
    
  )
}

export default Header
