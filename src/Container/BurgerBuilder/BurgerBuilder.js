import React, {Component} from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../Components/Burger/Burger'
import BuildControls from '../../Components/Burger/BuildControls/BuildControls'
import Model from '../../Components/UI/Model/Model'
import OrderSummery from '../../Components/Burger/OrderSummery/OrderSummery'

const IGPRICES = {
    cheese:15,
    salad: 10,
    bacon: 5,
    tikki: 20,
    purchasable: false
}

class BurgerBuilder extends Component{


    state = {
        ingred: {
            salad: 0,
            tikki: 0, 
            cheese: 0,
            bacon: 0
        },
        price : 20,
        purchasing: false
    }


    addIngred = type =>{
        let a = {...this.state.ingred};
        a[type]++;
        const updatedPrice = this.state.price+ IGPRICES[type]
        
        if(updatedPrice>20)
        IGPRICES.purchasable = true
        this.setState({
            ingred: a,
            price: updatedPrice,

        })
    }

    removeIngred = type =>{
        let a = {...this.state.ingred};
        const updatedPrice = this.state.price - IGPRICES[type]
        if(updatedPrice<=20){
            this.setState({
                purchasable: false
            })
        }
        if(a[type]>0){
            a[type] = a[type] - 1;
            this.setState({
               ingred: a,
               price: updatedPrice
        })
    }
    }

    purchaseHandler = () => {
        this.setState({
            purchasing: true
        })
    }

    modelRemoveHandler = () => {
        this.setState({
           purchasing: false
        })
    }

    successHandler = () =>{
        alert('Order Continued');
    }

    

    render(){
        // let order = null;
        // if(this.state.purchasing){
            
        // }
        return (
            <Aux>
                {/* <div>Price = {this.state.price}</div> */}
                >
               <Burger ingred = {this.state.ingred}>
               </Burger>
               {/* {order} */}
               <Model removeModel = {this.modelRemoveHandler} show = {this.state.purchasing}>
                   <OrderSummery 
                   igSummery = {this.state.ingred}
                   success = {this.successHandler}
                   cancel = {this.modelRemoveHandler}
                   price = {this.state.price}
                   /></Model>
               <BuildControls 
               addI = {this.addIngred} 
               removeI={this.removeIngred}
               price = {this.state.price}
               purchasable = {IGPRICES.purchasable}
               showOrderDetails = {this.purchaseHandler}
               ></BuildControls>
            </Aux>
        )
    }
} 
export default BurgerBuilder