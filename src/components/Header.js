import React from 'react'
import { NavLink } from 'react-router-dom'

function Header({ isOnline }) {
  return (
    <header>
      <nav>
        <div className='logo'>
          <img
            src='https://cf.upstox.com/app/themes/upstox/dist/img/Upstox-logo-blue.svg'
            alt='Upstox logo'
          />
        </div>
        <ul>
          <li>
            <NavLink to='/home' id='link-home' activeClassName='is-active'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/live'
              id='link-live'
              activeClassName='is-active'
              className={`online-status ${
                isOnline ? 'is-online' : 'is-offline'
              }`}
            >
              Live
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
