import React, { Component } from "react";
import { buyIceCream } from "../STORE/iceCream/iceCreamAction";
import { connect } from "react-redux";
const mapStateToProps = (state) => {
  return {
    numOfIceCream: state.iceCream.numofIceCreams,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};
class iceCreamContainer extends Component {
  render() {
    return (
      <div>
        <p>IceCream Stock {this.props.numOfIceCream}</p>
        <button onClick={this.props.buyIceCream}>Buy IceCream</button>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(iceCreamContainer);
