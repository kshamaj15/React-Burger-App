import React from 'react'

import classes from './BuildControls.module.css'
import BuidControl from './BuildControl/BuildControl'

const BuidControls = props => {

    const control = [
        {label: 'Salad', type: 'salad'},
        {label: 'Cheese', type: 'cheese'},
        {label: 'Bacon', type: 'bacon'},
        {label: 'Tikki', type: 'tikki'}
    ]

    return(
        <div className = {classes.BuidControls}>
            {control.map(c=>{
                return <BuidControl 
                key={c.label} 
                type={c.label} 
                add={()=>props.addI(c.type)} 
                remove={()=>props.removeI(c.type)}
                ></BuidControl>
            })}
        </div> 
    )

   
}
export default BuidControls;