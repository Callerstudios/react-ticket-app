import React from "react";

const SignUp = () => {
  return (
    <div>
      <section className="auth-section">
        <div className="container auth-container">
          <div className="auth-box">
            <h2>Create an Account</h2>
            <p className="subtitle">Join TicketApp to manage tickets easily</p>

            <form id="signupForm" className="auth-form">
              <div className="form-group">
                <label for="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  required
                />
                <small className="error-message" id="nameError"></small>
              </div>

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
                  placeholder="Enter a strong password"
                  required
                />
                <small className="error-message" id="passwordError"></small>
              </div>

              <button type="submit" className="btn primary full">
                Sign Up
              </button>
            </form>

            <p className="auth-switch">
              Already have an account? <a href="/auth/login">Login</a>
            </p>
          </div>
        </div>

        <div id="toast" className="toast"></div>
      </section>
    </div>
  );
};

export default SignUp;
