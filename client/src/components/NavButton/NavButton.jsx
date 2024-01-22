import React from 'react'
import './navButton.css'
import { Link } from 'react-router-dom'

function NavButton({href, name}) {
  return (
    <Link className='link' to={href}>{name}</Link>
  )
}

export default NavButton