import React, {useState} from 'react'
import './index.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const changeOpen = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      {/* This is mobile Navbar */}
      <div>
        <nav className="nav-container">
          <img
            src="https://res.cloudinary.com/dqpacvvei/image/upload/v1756552789/SVG_c60odg.png"
            className="nav-img"
            alt="navImage"
            onClick={changeOpen}
          />

          <div>
            <img
              src="https://res.cloudinary.com/dqpacvvei/image/upload/v1756553572/Link_SVG_asiebc.png"
              className="nav-honeyCo-img"
              alt="honeyImg"
            />
          </div>
          <div className="nav-sider">
            <img
              src="https://res.cloudinary.com/dqpacvvei/image/upload/v1756553799/Link_SVG_qttcdl.png"
              className="nav-pic-img"
              alt="picImg"
            />
            <img
              src="https://res.cloudinary.com/dqpacvvei/image/upload/v1756553865/Link_SVG_w470eh.png"
              className="nav-Search"
              alt="search"
            />
            <img
              src="https://res.cloudinary.com/dqpacvvei/image/upload/v1756553922/Link_ba7c6y.png"
              className="nav-cart-img"
              alt="cart"
            />
          </div>
        </nav>
        {isOpen && (
          <ul className="hamburger-data">
            <li className="hamburger-list">Shop</li>
            <li className="hamburger-list">Explore</li>
            <li className="hamburger-list">About</li>
            <li className="hamburger-list">Rewards</li>
            <li className="hamburger-list">Contact</li>
          </ul>
        )}
      </div>

      {/* This is deskTop Navbar */}
      <nav className="nav-container-desktop">
        <div className="nav-container-desktop-thin-card">
          <p className="nav-container-desktop-heading">
            WHICH MANUKA IS FOR ME?
          </p>
        </div>

        <p className="nav-container-desktop-card-paragraph">Shop</p>
        <p className="nav-container-desktop-card-paragraph">Explore</p>
        <img
          src="https://res.cloudinary.com/dqpacvvei/image/upload/v1756553572/Link_SVG_asiebc.png"
          className="nav-container-desktop-card-honeyCo"
          alt="honeyImg"
        />
        <p className="nav-container-desktop-card-paragraph">About</p>
        <p className="nav-container-desktop-card-paragraph">Rewards</p>
        <p className="nav-container-desktop-card-paragraph">Contact</p>
        <div className="nav-container-desktop-sider">
          <img
            src="https://res.cloudinary.com/dqpacvvei/image/upload/v1756553799/Link_SVG_qttcdl.png"
            className="nav-container-desktop-pic-img"
            alt="picImg"
          />
          <img
            src="https://res.cloudinary.com/dqpacvvei/image/upload/v1756553865/Link_SVG_w470eh.png"
            className="nav-container-desktop-pic-img"
            alt="search"
          />
          <img
            src="https://res.cloudinary.com/dqpacvvei/image/upload/v1756553922/Link_ba7c6y.png"
            className="nav-container-desktop-pic-img"
            alt="cart"
          />
        </div>
      </nav>
    </>
  )
}

export default Navbar
