import React from 'react'

import classes from './BuildControls.module.css'
import BuidControl from './BuildControl/BuildControl'

const BuidControls = props => {

    const control = [
        {label: 'Salad', typ: 'salad'},
        {label: 'Tikki', typ: 'tikki'},
        {label: 'Cheese', typ: 'cheese'},
        {label: 'Bacon', typ: 'bacon'}
    ]

    return(
        <div className = {classes.BuidControls}>
            <p>Current Price: <strong>Rs. {props.price}</strong></p>
            {control.map(c=>{
                return <BuidControl 
                key={c.label} 
                type={c.label}
                add={()=>props.addI(c.typ)} 
                remove={()=>props.removeI(c.typ)}
                ></BuidControl> 
            })}
            <button onClick = {props.showOrderDetails} disabled = {!props.purchasable} className = {classes.OrderButton}>ORDER BURGER</button>
        </div> 
    )

   
}
export default BuidControls;