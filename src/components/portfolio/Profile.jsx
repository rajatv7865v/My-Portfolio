import React from 'react'
import ProfileCss from'../../style/Profile.module.css'


const Profile = () => {
  return (
    <div className={ProfileCss.container}>
      <div className={ProfileCss.profileImage}>
      <img src='https://getflywheel.com/layout/wp-content/uploads/2022/02/best-themes-portfolio-sites.jpeg'alt="Profileimage" />
      </div>
      
      <div className={ProfileCss.ProfileLeft}>
       
       
       <h4>Hello, My name is</h4>
       <h1>Rajat Verma</h1>
       <h3>And I'm a <span style={{color:'red'}}>Frontend Developer</span></h3>
       <input type="file" />
      </div>
      <div className={ProfileCss.ProfileRight}>
       Right
      </div>
    </div>
  )
}

export default Profile
