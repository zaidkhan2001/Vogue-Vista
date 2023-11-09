import React from 'react';

const Login = () => {
  return (
    <>
    <form action=''>
    <div className="container mt-5" style={{}}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center">Login</h2>
              <form>
                <div className="form-group">
                  <label htmlFor="username" style={{fontWeight:'600'}}>Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Enter your username"
                    autoComplete='off'
                    required
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
                    placeholder="Enter your password (Min 8 Length)"
                  />
                </div>
                <div className="row justify-content-center">
                <p style={{fontWeight:'600'}}>Don't have an account?</p>&nbsp;
                <a href="https://google.com" style={{color:'blue'}}>SignUp</a>
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </form>
    </>
  );
};

export default Login;
