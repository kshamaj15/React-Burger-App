import React from 'react'
import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'

const Layout = props => {
    return(
        <div>
            <Toolbar></Toolbar>
            <main className = {classes.content}>
                {props.children}
            </main>
        </div>
    )
}

export default Layout