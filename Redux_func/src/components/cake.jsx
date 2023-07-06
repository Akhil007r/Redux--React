import React from 'react'
import { buyCake } from '../redux/cake'
import { connect } from 'react-redux'
function Cake(props) {
  return (
    <div>
        <h1>Number of Cakes: {props.numberOfCakes}</h1>
        <button onClick={props.buyCake()}>Buy Cake</button>
    </div>
  )
}
const mapStateToProps = state => {
    return{
        numberOfCakes:state.numberOfCakes - 1
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        buyCake:()=>dispatch(buyCake())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cake)