import React from 'react'
import classes from './BuildControl.module.css'

const BuildControl = props => {
    return(
        <div className = {classes.BuildControl}>
            <label className = {classes.Label}>{props.type}</label>
            <button onClick = {props.add} className = {classes.More}>More</button>
            <button onClick = {props.remove} className = {classes.Less}>less</button>
        </div>
    )
}

export default BuildControl;