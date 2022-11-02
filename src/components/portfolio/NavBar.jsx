import React from 'react'
import NavBarCss from '../../style/NavBar.module.css'

const NavBar = () => {
  return (
    <div className={NavBarCss.container}>
      <div className={NavBarCss.containerChild}>
        <div className={NavBarCss.logo}><div>Logo</div></div>
        <div className={NavBarCss.menu}>
        <div>Profile</div>
        <div>About</div>
        <div>Skills</div>
        <div>Project</div>
        <div>Contact</div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
