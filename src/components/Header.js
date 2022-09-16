import React from "react"

const Header = () => {
  return (
    <header className="trans-header">
      <img src='./images/logo.png' alt='Logo' />
      <h1>My Website</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#news">News</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header