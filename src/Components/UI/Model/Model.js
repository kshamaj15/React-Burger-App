import React from 'react'
import classes from './Model.module.css'
import Backdrop from '../Backdrop/Backdrop'

const  Model = props => (
    <div>
        <Backdrop show = {props.show} clicked = {props.removeModel}></Backdrop>
        <div className = {classes.Model} 
        style = {{
            transform : props.show ? 'translateY(0)':'translateY(-100vh)'
            // opacity : props.show ? '1' : '0' 
        }}>
        {props.children}
        </div>
    </div>
)

export default Model