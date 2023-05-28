import React, { useState } from 'react'
  import DropDown from './DropDown'
  import Button from './Button'
  import { Link } from 'react-router-dom'
  import './navbar.css'
  
  function Navbar() {
  
      const [click, setClick] = useState(false)
      const [dropdown, setDropdown] = useState(false)
      const changeClick = () => setClick(!click)
      const closeMobileMenu = () => setClick(false)
  
      const onMouseEnter = () => {
          setDropdown(true)
      }
  
      const onMouseLeave = () => {
          setDropdown(false)
      }
  
      return (
          <>
              <section>
                  <nav className="navbar">
  
                  <a href="/" className="logo"><img src="https://uploads-ssl.webflow.com/60368c7a9825e43c4a6af8dd/60368c7a9825e419c16afa33_logo%201-1.png" loading="eager" width="120" alt="Proservy" /></a>
  
                      <div className="menu-icon" onClick={changeClick}>
                          <i className={click ? 'fas fa-times' : 'fas fa-bars'} ></i>
                      </div>
  
                      <ul className={click ? 'nav-side-menu start' : 'nav-side-menu'}>
                      <li className='nav-items' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
                              <Link className='nav-links' onClick={closeMobileMenu}> Création d'Entreprise <i className='fas fa-caret-down' />
                                  {dropdown && <DropDown />}
                              </Link>
                          </li>
  
                          <li className='nav-items'>
                              <Link to="/" className='nav-links' onClick={closeMobileMenu}> Services Pour Entreprises </Link>
                          </li>
  
                          <li className='nav-items'>
                              <Link to="/Sinformer" className='nav-links' onClick={closeMobileMenu}> Sinformer </Link>
                          </li>
  
                          
  
                         
  
                          <li className='nav-items'>
                              <Link to="/Espaceclient" className='nav-links-button' onClick={closeMobileMenu}> Espace Client </Link>
                          </li>
  
                      </ul>
  
                      <Button />
  
                  </nav>
              </section>
          </>
      )
  }
  
  export default Navbar;