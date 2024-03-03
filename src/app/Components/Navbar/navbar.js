"use client"
import "./navbar.css";
import { CgMenuRightAlt } from 'react-icons/cg'
import { MdOutlineBedtime } from 'react-icons/md'
import { MdOutlineLightMode } from 'react-icons/md'
import { ImCross } from 'react-icons/im'
import Link from "next/link";
import { useEffect, useState } from 'react';
const Navigation = () => {
  const [navbar, setNavbar] = useState(false);
  const [clicked, setClick] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [theme, setTheme] = useState("light-theme");
  const handleClick = () => {
    setClick(!clicked);
    setNavbar(!navbar);
  }
  const handleMode = () => {
    theme === "light-theme" ? setTheme("dark-theme") : setTheme("light-theme");
    setDarkMode(!darkMode);
  }
  useEffect(() => {
    document.body.className = theme;
  }, [theme])
  return (
    <>
      <div className="header">
        {/* <img className='logo' src='./Images/Logo1 (12).png' alt='Asim'></img> */}
        <h1 className='logoText'><span className='FirstLetter'>A</span>sim.</h1>
        <ul className={navbar ? "navbar mobile-menu" : "navbar"}>
          <li><Link href='/' onClick={handleClick}>Home</Link></li>
          <li><Link href='about' onClick={handleClick}>About</Link></li>
          <li><Link href='skills' onClick={handleClick}>Skills</Link></li>
          <li><Link href='services' onClick={handleClick}>Services</Link></li>
          <li><Link href='portfolio' onClick={handleClick}>Portfolio</Link></li>
          <li><Link href='contact' onClick={handleClick}>Contact</Link></li>
          <div>
            <i className='pc-mode'>{!darkMode ? <MdOutlineBedtime className='ldMode pc-mode' onClick={handleMode} /> : <MdOutlineLightMode className='ldMode pc-mode' onClick={handleMode} />}</i>
            <button className='btn'><Link href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSDZBZqLJJbFBqlHRcqZFPdbhqCQnCcxbRTSdRpQbXJMZPRDJmwSkDqsCpvXtBvDpLjqxGbb" target="g" className="btnh">Hire me</Link></button>
          </div>
        </ul>
        <div className='m-mode-toggle' id='m-mode'>
          {!clicked ? <CgMenuRightAlt className='toggle' onClick={handleClick} /> : <ImCross className='toggle' id='cross' onClick={handleClick} />}
          <i className='mobile-mode' id='m-mode'>{!darkMode ? <MdOutlineBedtime className='ldMode mobile-mode' onClick={handleMode} /> : <MdOutlineLightMode className='ldMode mobile-mode' onClick={handleMode} />}</i>
        </div>
      </div>
    </>
  )
}
export default Navigation