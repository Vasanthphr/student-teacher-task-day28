import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <>
<h1 style={{color:"black",paddingLeft:"40%"}}>Welcome!!!</h1>
    <div className='row'>
        
<Link  className="nav-link" to="/portal/dashboard"> <span> <h4 style={{color:"blue"}}>DASHBOARD</h4> </span></Link>

<Link className="nav-link" to="/portal/teacher"><span><h4 style={{color:"orange"}}>TEACHER</h4></span></Link>

<Link className="nav-link" to="/portal/student"><span><h4 style={{color:"darkgreen"}}>STUDENTS</h4></span></Link>

        </div>
        </>



   )
}

export default Sidebar