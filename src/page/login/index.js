import React, {useState} from 'react';
import './style.css'

const Login = () => {
  const [containerClass, setContainerClass] = useState("");

  return (
    <div className="login-body">
      <div className={`container ${containerClass}`} id="container">
        <div className="form-container sign-up-container">
          <form action="/" className='login-form'>
            <h1>Create Account</h1>
            <div className="social-container">
              <a href="/" className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="/" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="/" className="social">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your email for registration</span>
            <input className="login_input" type="text" placeholder="Name" />
            <input className="login_input" type="email" placeholder="Email" />
            <input
              className="login_input"
              type="password"
              placeholder="Password"
            />
            <button className="login_button">Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="/" className='login-form'>
            <h1>Sign in</h1>
            <div className="social-container">
              <a href="/" className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="/" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="/" className="social">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your account</span>
            <input className="login_input" type="email" placeholder="Email" />
            <input
              className="login_input"
              type="password"
              placeholder="Password"
            />
            <a href="/">Forgot your password?</a>
            <button className="login_button">Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome To Movielee</h1>
              <p>SIGN IN IF YOU HAVE EXITING ACCOUNT</p>
              <button
                className="login_button ghost"
                id="signIn"
                onClick={() => {
                  setContainerClass("");
                }}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Welcome To Movielee</h1>
              <p>CREATE NEW ACCOUNT IF YOU DONT HAVE ANY ACCOUNT</p>
              <button
                className="login_button ghost"
                id="signUp"
                onClick={() => {
                  setContainerClass("right-panel-active");
                }}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
