import React from 'react'

const Header = () => {
  return (
    <header class="site-header">
      <div class="container nav-container">
        <h1 class="logo">🎟️ TicketApp</h1>
        <nav class="nav-links" id="mainNav">
          <a href="/">Home</a>
          <a href="/dashboard">Dashboard</a>
          <a href="/tickets">Tickets</a>
          <a href="/login">Login</a>
        </nav>
        <button class="nav-toggle" aria-label="Toggle navigation">
          ☰
        </button>
      </div>
    </header>
  );
}

export default Header