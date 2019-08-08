import React, {Component} from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../Components/Burger/Burger'

class BurgerBuilder extends Component{

    constructor(props){
        super(props)
    }

    state = {
        ingred: {
            salad: 2,
            tikki: 1, 
            cheese: 2,
            bacon: 2
        },
        price : 0
    }

    priceC = () => {
        let s = 10, t = 20, c = 15, b =10;
        let ig = this.state.ingred;
        let p = ig['salad']*s+ig['cheese']*c+ig['bacon']*b+ig['tikki']*t+20
        this.setState({
            price: p
        })
    }

    render(){
        return (
            <Aux>
               <Burger ingred = {this.state.ingred} price ={this.state.price}>
               </Burger>
               <button onClick = {this.priceC}>Price</button>
            </Aux>
        )
    }
}
export default BurgerBuilder