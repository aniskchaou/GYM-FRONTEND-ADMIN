import React, { useEffect, useState } from 'react';
import './Login.css';
import User from '../../config/user';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import userHTTPService from '../../services/userHTTPService';
import showMessage from '../../../libraries/messages/messages';


const Login = ({ handleClick }) => {

  let history = useHistory()
  var userInit = { username: "admin", password: "admin" }
  const { register, handleSubmit, errors } = useForm()
  const [activity, setActivity] = useState(userInit);

  useEffect(() => {
  }, []);


  const onSubmit = (data) => {
    userHTTPService.login({ username: activity.username, password: activity.password })
      .then(response => {
        setActivity(userInit)
        if (Object.keys(response.data).length !== 0) {
          handleClick(true)
          User.USER_DETAIL = response.data
          localStorage.setItem('connected', User.CONNECTED_USER);
          history.push("/dashboard")
        } else {
          User.CONNECTED_USER = false
          showMessage('Error', 'You have entered an invalid username or password', 'warning')
        }
      })
      .catch(e => {
        showMessage('Error', e, 'info')
        console.log(e)
      });


  }

  const handleInputChange = event => {
    const { name, value } = event.target;
    setActivity({ ...activity, [name]: value });
  };


  return (
    <div className="Login"  >
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">
              <img src="assets/img/logo.png" /></h4>
          </div><div class="card-body">
            <form onSubmit={handleSubmit(onSubmit)} method="post">
              <div class="form-group"><label >Username</label>
                <input name="username" onChange={handleInputChange} value={activity.username} ref={register({ required: true })} type="text" placeholder="Company" class="form-control" />
              </div><div class="form-group">
                <label  >Password</label>
                <input name="password" onChange={handleInputChange} value={activity.password} ref={register({ required: true })} type="password" placeholder="Username" class="form-control" /></div>
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
