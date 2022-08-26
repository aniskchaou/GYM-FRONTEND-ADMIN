import React from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import User from '../../config/user';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';

const Login = (props) => {
  let history = useHistory()
  const { register, handleSubmit, errors } = useForm()


  const onSubmit = (data) => {
    props.rerender();
    User.CONNECTED_USER = true
    history.push("/dashboard")
  }

  return (
    <div className="Login" style={{ display: (!User.CONNECTED_USER ? 'block' : 'none') }} >
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">
              <img src="assets/img/logo.png" /></h4>
          </div><div class="card-body">
            <form onSubmit={handleSubmit(onSubmit)} method="post">
              <div class="form-group"><label >Username</label>
                <input type="text" placeholder="Company" value="admin" class="form-control" />
              </div><div class="form-group">
                <label  >Password</label>
                <input type="password" placeholder="Username" value="admin" class="form-control" /></div>
              <div class="update ml-auto mr-auto">
                <button class="btn btn-primary btn-round" type="submit" >Sign in</button>
                <a href="https://gym-client.herokuapp.com/" class="btn btn-warning btn-round" type="button" >Return</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
};

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
