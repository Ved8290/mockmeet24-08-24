"use client"
import React, { useEffect } from 'react'
import { UserButton, useUser, SignInButton } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'

function Header() {
  const { isSignedIn } = useUser();
  const path = usePathname();

  return (
    <div className="flex p-4 justify-between items-center bg-secondary shadow-sm">
      <h1 className='font-bold text-2xl text-indigo-700'>MockMeet</h1>
      
      <ul className='hidden md:flex gap-7 '>
        <li className={`hover:text-primary hover:font-bold cursor-pointer transition-all ${path == '/' && 'text-primary font-bold'}`} >
          <a href='/'>Home</a>
        </li>
        <li className={`hover:text-primary hover:font-bold cursor-pointer transition-all ${path == '/dashboard' && 'text-primary font-bold'}`} >
          <a href='/dashboard'>Dashboard</a>
        </li>
        <li className={`hover:text-primary hover:font-bold cursor-pointer transition-all ${path == '/aboutus' && 'text-primary font-bold'}`} >
          <a href='/aboutus'>About Us</a>
        </li>
        <li className={`hover:text-primary hover:font-bold cursor-pointer transition-all ${path == '/ContactUs' && 'text-primary font-bold'}`} >
          <a href='/ContactUs'>Contact Us</a>
        </li>
      </ul>
      
      <div>
        {isSignedIn ? (
          <UserButton />
        ) : (
          <SignInButton>
            <button className="bg-indigo-700 text-white px-4 py-2 rounded-lg hover:bg-indigo-800 transition-all">
              Login
            </button>
          </SignInButton>
        )}
      </div>
    </div>
  )
}

export default Header
