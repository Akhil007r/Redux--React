import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure,
} from "../STORE/fetchdata";

const mapStateToProps = (state) => {
  return {
    loading: state.userData.loading,
    userData: state.userData.userData,
    error: state.userData.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserRequest: () => dispatch(fetchUserRequest()),
    fetchUserSuccess: (userData) => dispatch(fetchUserSuccess(userData)),
    fetchUserFailure: (error) => dispatch(fetchUserFailure(error)),
  };
};

class userContainer extends Component {
  FetchUsers = () => {
    const { fetchUserFailure, fetchUserRequest, fetchUserSuccess } = this.props;
    fetchUserRequest();
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => {
        fetchUserSuccess(res);
      })
      .catch((err) => {
        const error = err.message;
        fetchUserFailure(error);
      });
  };
  componentDidMount() {
    this.FetchUsers();
  }

  renderUsers = () => {
    const { userData, error } = this.props;
    return (
      <>
        <div>
          {userData &&
            userData.map((user, index) => {
              return (
                <p key={index}>
                  Name:{user.name}. <br /> Email:{user.email}
                </p>
              );
            })}
          {error && <p>{error}</p>}
        </div>
      </>
    );
  };


  render() {
    return (
      <>
        <h1>Users List</h1>
        <div>{this.renderUsers()}</div>
      </>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(userContainer);
