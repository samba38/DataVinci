import React, {useState} from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import Navbar from '../Navbar'
import Sliders from '../Sliders'
import ImagesSection from '../ImagesSection'
import Cart from '../Cart'
import './index.css'

const Home = () => {
  const [open, setOpen] = useState(false)
  const onGoToInfo = () => {
    setOpen(true)
  }
  const onGoBack = () => {
    setOpen(false)
  }

  const infoRender = () => {
    return (
      <div className="info-wrapper">
        <div className="info-card">
          <p>
            <span className="bold">UMF</span> is the strength and purity rating
            of Manuka honey.
          </p>
          <div className="values-row">
            <p className="val orange">10+</p>
            <p className="hone-liner"></p>
            <p className="val red">15+</p>
            <p className="val pink">20+</p>
            <p className="val purple">24+</p>
            <p className="val green">26+</p>
            <p className="val dark-green">28+</p>
            <p className="val blue">30+</p>
          </div>
          <p className="desc">
            The higher the number, the greater the potency and rarity of Manuka
            honey.
          </p>
        </div>
        <div className="info-card">
          <p>
            <span className="bold">MGO</span> is the key natural compound that
            gives Manuka honey its special antibacterial strength.
          </p>
          <div className="values-row">
            <span className="val orange">263+</span>
            <span className="val red">514+</span>
            <span className="val pink">829+</span>
            <span className="val purple">1122+</span>
            <span className="val light-blue">1282+</span>
            <span className="val green">1450+</span>
            <span className="val dark-blue">1620+</span>
          </div>
          <p className="desc">
            The higher the number, the higher the antibacterial properties in
            the honey.
          </p>
        </div>
        <button className="close-btn" type="button" onClick={onGoBack}>
          Close
        </button>
      </div>
    )
  }
  return (
    <>
      <Navbar />

      <div className="home-container">
        <Sliders />
        <h1 className="home-heading">
          Manuka <br />
          Honey <br />
          UMF 24+ <br />
          MGO 1122+
        </h1>
        <button className="home-btn" type="button" onClick={onGoToInfo}>
          <img
            src="https://res.cloudinary.com/dqpacvvei/image/upload/v1756561515/SVG_avy8rk.png"
            className="btn-img-home"
          />
          What is UMF and MGO?
        </button>
        {open && infoRender()}
        <div>
          <img
            src="https://res.cloudinary.com/dqpacvvei/image/upload/v1756556783/Link_Manuka_Honey_UMF_24___MGO_1122_ieil6w.png"
            className="home-medic-img"
          />
          <img
            src="https://res.cloudinary.com/dqpacvvei/image/upload/v1756556783/Link_Manuka_Honey_UMF_24___MGO_1122_ieil6w.png"
            className="home-medic-img"
          />
          <img
            src="https://res.cloudinary.com/dqpacvvei/image/upload/v1756564056/d07b7562a11ef9ede254e5ffddc9a19e57a99608_nfpnu0.png"
            className="home-medic-img"
          />
        </div>
      </div>

      <div className="home-container-desktop">
        <div className="home-container-desktop-img-card">
          <Sliders />
          <ul className="home-container-desktop-unorder-list">
            <li className="home-container-desktop-list home-container-border">
              <img
                src="https://res.cloudinary.com/dqpacvvei/image/upload/v1756574039/Item_Link_y3m35m.png"
                className="home-container-desktop-list-img"
                alt="UFIs"
              />
            </li>
            <li className="home-container-desktop-list">
              <img
                src="https://res.cloudinary.com/dqpacvvei/image/upload/v1756574092/Item_Link_ps9xlj.png"
                className="home-container-desktop-list-img"
                alt="UFIs"
              />
            </li>
            <li className="home-container-desktop-list">
              <img
                src="https://res.cloudinary.com/dqpacvvei/image/upload/v1756574143/Item_Link_kt9slj.png"
                className="home-container-desktop-list-img2"
                alt="UFIs"
              />
            </li>
            <li className="home-container-desktop-list">
              <img
                src="https://res.cloudinary.com/dqpacvvei/image/upload/v1756574194/Item_Link_dwgrgy.png"
                className="home-container-desktop-list-img3"
                alt="UFIs"
              />
            </li>
            <li className="home-container-desktop-list">
              <img
                src="https://res.cloudinary.com/dqpacvvei/image/upload/v1756574549/Item_Link_diafln.png"
                className="home-container-desktop-list-img3"
                alt="UFIs"
              />
            </li>
            <li className="home-container-desktop-list">
              <img
                src="https://res.cloudinary.com/dqpacvvei/image/upload/v1756574634/Item_Link_oehi8g.png"
                className="home-container-desktop-list-img3"
                alt="UFIs"
              />
            </li>
            <li className="home-container-desktop-list">
              <img
                src="https://res.cloudinary.com/dqpacvvei/image/upload/v1756574696/Item_Link_owuglb.png"
                className="home-container-desktop-list-img3"
                alt="UFIs"
              />
            </li>
          </ul>
        </div>
        <div className="home-container-desktop-content-card">
          <h1 className="home-container-desktop-content-card-heading">
            Manuka <br />
            Honey <br />
            UMF <span className="span-heading">24+</span> <br />
            MGO <span className="span-heading">1122+</span>
          </h1>
          <div className="popup-container">
            <Popup
              modal
              trigger={
                <button
                  className="home-container-desktop-content-btn"
                  type="button"
                  onClick={onGoToInfo}
                >
                  <img
                    src="https://res.cloudinary.com/dqpacvvei/image/upload/v1756561515/SVG_avy8rk.png"
                    className="btn-img-home"
                  />
                  What is UMF and MGO?
                </button>
              }
            >
              {close => (
                <>
                  <div className="home-container-desktop-content-info-wrapper">
                    <div className="home-container-desktop-content-info-card">
                      <p>
                        <span className="home-desktop-bold">UMF</span> is the
                        strength and purity rating of Manuka honey.
                      </p>
                      <div className="home-container-desktop-content-values-row">
                        <p className="val orange">10+</p>
                        <p className="hone-liner"></p>
                        <p className="val red">15+</p>
                        <p className="val pink">20+</p>
                        <p className="val purple">24+</p>
                        <p className="val green">26+</p>
                        <p className="val dark-green">28+</p>
                        <p className="val blue">30+</p>
                      </div>
                      <p className="home-container-desktop-content-desc">
                        The higher the number, the greater the potency and
                        rarity of Manuka honey.
                      </p>
                    </div>
                    <div className="home-container-desktop-content-info-card">
                      <p>
                        <span className="home-desktop-bold">MGO</span> is the
                        key natural compound that gives Manuka honey its special
                        antibacterial strength.
                      </p>
                      <div className="-values-row">
                        <span className="val orange">263+</span>
                        <span className="val red">514+</span>
                        <span className="val pink">829+</span>
                        <span className="val purple">1122+</span>
                        <span className="val light-blue">1282+</span>
                        <span className="val green">1450+</span>
                        <span className="val dark-blue">1620+</span>
                      </div>
                      <p className="home-container-desktop-content-desc">
                        The higher the number, the higher the antibacterial
                        properties in the honey.
                      </p>
                    </div>
                    <button
                      className="close-btn"
                      type="button"
                      onClick={() => close()}
                    >
                      Close
                    </button>
                  </div>
                </>
              )}
            </Popup>
          </div>
          <div className="home-container-desktop-content-optim-sider">
            <h1 className="home-container-desktop-content-optim-heading">
              The Optimiser
            </h1>
            <p className="home-container-desktop-content-optim-paragraph">
              <img
                src="https://res.cloudinary.com/dqpacvvei/image/upload/v1756600094/Container_xwjj4z.png"
                className="home-container-desktop-content-optim-heart"
              />
              825 Reviews
            </p>
          </div>
          <p className="home-container-desktop-content-optim-description">
            For those times in life when quality comes first. This pure UMF™
            24+ Manuka Honey is powerfully active, sourced from wild and rugged
            locations around Aotearoa New Zealand and great for almost all uses.
            It has a full, delicious flavour and your body will love you for it.
          </p>
          <ImagesSection />
          <Cart />
        </div>
      </div>
    </>
  )
}

export default Home
