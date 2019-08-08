import React, {Component} from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../Components/Burger/Burger'
import BuildControls from '../../Components/Burger/BuildControls/BuildControls'
const IGPRICES = {
    cheese:15,
    salad: 10,
    bacon: 7,
    tikki: 20
}

class BurgerBuilder extends Component{

    constructor(props){
        super(props)
    }

    state = {
        ingred: {
            salad: 0,
            tikki: 0, 
            cheese: 0,
            bacon: 0
        },
        price : 20
    }


    addInged = type =>{
        let a = {...this.state.ingred};
        a[type]++;
        const updatedPrice = this.state.price+ IGPRICES[type]
        this.setState({
            ingred: a,
            price: updatedPrice
        })
    }

    removeIngerd = type =>{
        let a = {...this.state.ingred};
        if(a[type!=0]){
            a[type]--;
            this.setState({
            ingred: a
        })}
    }

    render(){
        return (
            <Aux>
                <div>Price = {this.state.price}</div>
               <Burger ingred = {this.state.ingred}>
               </Burger>
               <BuildControls addI = {this.addInged} removeI={this.removeIngerd}></BuildControls>
            </Aux>
        )
    }
} 
export default BurgerBuilder