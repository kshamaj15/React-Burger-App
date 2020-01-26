import React from 'react'
import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button'

const OrderSummery = props => {
    const igSummery = Object.keys(props.igSummery)
    .map(igKey=>{
        return <li><span style = {{textTransform : 'capitalize'}}>{igKey}</span> : {props.igSummery[igKey]}</li>
    });
    return(
        <Aux>
            <h3>Your Order Summery</h3>
            <p>A delicious Burger with following ingredients: </p>
            <ul>
                {igSummery}
            </ul>
            <p><strong>Total Price: {props.price}</strong></p>
            <Button 
            type= "Success" 
            clicked = {props.success}>
                Continue
            </Button>

            <Button 
            type = "Danger" 
            clicked = {props.cancel}>
                Cancel
            </Button>

        </Aux>
    )
}

export default OrderSummery