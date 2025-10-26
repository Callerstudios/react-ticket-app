import React from "react";

const Login = () => {
  return (
    <div>
      <section className="auth-section">
        <div className="container auth-container">
          <div className="auth-box">
            <h2>Welcome Back</h2>
            <p className="subtitle">Login to access your dashboard</p>

            <form id="loginForm" className="auth-form">
              <div className="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                />
                <small className="error-message" id="emailError"></small>
              </div>

              <div className="form-group">
                <label for="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  required
                />
                <small className="error-message" id="passwordError"></small>
              </div>

              <button type="submit" className="btn primary full">
                Login
              </button>
            </form>

            <p className="auth-switch">
              Don’t have an account? <a href="/signup">Sign up</a>
            </p>
          </div>
        </div>

        <div id="toast" className="toast"></div>
      </section>
    </div>
  );
};

export default Login;
