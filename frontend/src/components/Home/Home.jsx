import React from 'react'

import Main from '../template/Main'
import {Link} from 'react-router-dom'

import  camera from '../../assets/imgs/camera.png'


  


export default props =>
  
<Main icon ="home" title="Inicio"
subtitle ="Projeto em React" >

<aside className ="logo1">

   <Link to ="/" className="logo1">
      <img src= {camera} alt ="logo1"/>
   </Link>

  </aside>

<div className='display-4'> Bem Vindo!</div>
<hr />
<p className="mb-0"> Sistema para Cadastramento de Câmeras!!</p>

</Main>