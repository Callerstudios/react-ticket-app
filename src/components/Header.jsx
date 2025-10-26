import React from "react";

const Header = () => {
  return (
    <header className="site-header">
      <div className="container nav-container">
        <h1 className="logo">🎟️ TicketApp</h1>
        <nav className="nav-links" id="mainNav">
          <a href="/">Home</a>
          <a href="/dashboard">Dashboard</a>
          <a href="/tickets">Tickets</a>
          <a href="/login">Login</a>
        </nav>
        <button className="nav-toggle" aria-label="Toggle navigation">
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header;
