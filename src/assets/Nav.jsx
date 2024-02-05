import React from 'react'
import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <nav>
        <div className='logoContainerNav'>
          <img src="./images/logo-line.png" alt="logo-css-design-wizard" />
        </div>
        <div className='navItems'>
            <Link to={'/'}><div><h5>HOME</h5></div></Link>
            <Link to={'/shadows'}><div><h5>SOMBRAS</h5></div></Link>
            <Link to={'/gradients'}><div><h5>GRADIENTES</h5></div></Link>
            <Link to={'/palettes'}><div><h5>PALETAS</h5></div></Link>
            <Link to={'/popular-gradient'}><div><h5>GRADIENTES POPULARES</h5></div></Link>
        </div>
    </nav>
  )
}
export default Nav;