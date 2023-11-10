import React from 'react';
const Login = () => {
  return (
    <div style={{backgroundColor:'white',height:'100vh'}}>
    <form action='' style={{}}>
    <div className="row justify-content-center">
  
    <img src={require('./logo.png')} style={{height:250,width:250}}></img>
    </div> 
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card" style={{borderRadius:40,marginTop:-50, boxShadow:20,  boxShadow: '0 0 20px 5px rgba(0, 0, 0, 0.4), 0 0 50px 15px rgba(0, 0, 0, 0.2)',
    animation: 'glow-animation 1.5s infinite alternate' }}>
            <div className="card-body">
              <h2 className="card-title text-center">Login</h2>
              <form>
                <div className="form-group">
                  <label htmlFor="username" style={{fontWeight:'600'}}>Username:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Enter your username"
                    autoComplete='off'
                    required
                    style={{borderRadius:40}}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password" style={{fontWeight:'600'}}>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    minLength={8}
                    required
                    placeholder="Enter your password"
                    style={{borderRadius:40}}
                  />
                </div>
                <div className="row justify-content-center">
                <p style={{fontWeight:'600'}}>Don't have an account?</p>&nbsp;
                <a href="https://google.com" style={{color:'blue'}}>SignUp</a>
                </div>
                <button type="submit" className="btn btn-primary btn-block" style={{backgroundColor:'black',borderRadius:40}}>
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </form>
    </div>
  );
};

export default Login;
