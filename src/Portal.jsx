import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

function Portal() {
    return (
        <div id="wrapper">
            <Sidebar></Sidebar>
            <div id="content-wrapper" class="d-flex flex-column">
                <div id="content">
                 
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Portal