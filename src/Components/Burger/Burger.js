import React from 'react'
import classes from './Burger.module.css'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'

const Burger = props => {
    let ig = Object.keys(props.ingred).map((igKey, i)=>{
        return [...Array(props.ingred[igKey])].map((v, index)=>{
            //console.log(igKey)
            return <BurgerIngredients type = {igKey} key = {index+igKey}></BurgerIngredients>
        })
    })
    console.log(ig)
   return(
       <div className = {classes.Burger}>
          <BurgerIngredients type= "breadTop"></BurgerIngredients>
          {ig}
          
          {/* <BurgerIngredients type= "salad"></BurgerIngredients>
          <BurgerIngredients type= "cheese"></BurgerIngredients>
          <BurgerIngredients type= "tikki"></BurgerIngredients> */}
          <BurgerIngredients type= "breadBottom"></BurgerIngredients>
          Price ={props.price}
       </div>
   )
}

export default Burger