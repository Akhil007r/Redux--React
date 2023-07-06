import React, { Component } from 'react';
import { authReducer } from '../store/Login/loginReducer';

const mapStateToProps=(state)=>{
console.log(state)
}
const mapDispatchToProps=(dispatch)=>{
console.log(dispatch)
}
class LoginContainer extends Component {
  render() {
    return (
      <div>
        <input type='text'/>
        <input type='password'/>
      </div>
    )
  }
}
