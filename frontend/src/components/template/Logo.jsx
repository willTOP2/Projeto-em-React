import './Logo.css'
import {Link} from 'react-router-dom'
import React from 'react'
import  logo_taruma from '../../assets/imgs/logo.jpg'
export default props =>

  <aside className ="logo">

   <Link to ="/" className="logo">
      <img src= {logo_taruma} alt ="logo"/>
   </Link>

  </aside>