import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import React from 'react'
import './Footer.css'
import logo from './logo.png'


export default function Footer () {
  return (
    <footer className='footer'>

      <img src={logo} alt='1' id='img' />
      <ul>
        <CustomLink to='https://www.linkedin.com/events/engagingblacktalent-networkinga6836136550963654656/'>Resources</CustomLink>
        <CustomLink to='https://www.bing.com/ck/a?!&&p=6df04438f74b2999JmltdHM9MTY3MDcxNjgwMCZpZ3VpZD0xYWEyOTEyMS1lMGFlLTY1ZjktM2Y5Zi04MDRhZTExOTY0MDgmaW5zaWQ9NTE4Mw&ptn=3&hsh=3&fclid=1aa29121-e0ae-65f9-3f9f-804ae1196408&psq=marcy+lab+school&u=a1aHR0cHM6Ly93d3cubWFyY3lsYWJzY2hvb2wub3JnLw&ntb=1'>Contact Us</CustomLink>
      </ul>
    </footer>
  )
}

function CustomLink ({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActives = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActives ? 'active' : ''}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
