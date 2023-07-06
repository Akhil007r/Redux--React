import React, { Component } from "react";
import { buyCake } from "../STORE/cake";
import { connect } from "react-redux";

export const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};
export const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};
class cakeContainer extends Component {
  render() {
    return (
      <div>
        <p>Number Of Cakes {this.props.numOfCakes}</p>
        <button onClick={this.props.buyCake}>Buy Cake </button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(cakeContainer);
