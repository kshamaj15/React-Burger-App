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
        .reduce((arr, el)=>{
            return arr.concat(el)
        },[])
    
    //console.log(ig)

    if(ig.length===0)
    ig = <p>Please add iggredients</p>

   return(
       <div className = {classes.Burger}>
          <BurgerIngredients type= "breadTop"></BurgerIngredients>
          {ig}
          
          {/* <BurgerIngredients type= "salad"></BurgerIngredients>
          <BurgerIngredients type= "cheese"></BurgerIngredients>
          <BurgerIngredients type= "tikki"></BurgerIngredients> */}
          <BurgerIngredients type= "breadBottom"></BurgerIngredients>
       </div>
   )
}

export default Burger