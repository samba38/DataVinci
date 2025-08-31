import React, {useState} from 'react'
import './index.css'
const Cart = () => {
  const [weight, setWeight] = useState('')
  return (
    <>
      <h1 className="cart-payment-heading">PAYMENT OPTIONS (SELECT ONE)</h1>
      <div className="cart-subscription-card">
        <div className="cart-subscription-sider">
          <button className="cart-subscription-btn">
            <div className="cart-subscription-card-purchase">
              <p className="cart-subscription-card-purchase-para">
                One-time <br />
                purchase
              </p>
              <p className="cart-subscription-card-purchase-para">
                $55.88 <br />
                USD
              </p>
            </div>
          </button>
          <button className="cart-subscription-btn">
            <div className="cart-subscription-card-purchase2">
              <p className="cart-subscription-card-purchase-para2">
                Subscribe & save <br />
                20%
              </p>
              <p className="cart-subscription-card-purchase-para2">
                $44.70 <br />
                USD
              </p>
            </div>
          </button>
        </div>

        <p className="cart-payment-subscription">
          <img src="https://res.cloudinary.com/dqpacvvei/image/upload/v1756605709/SVG_bxtysc.png" />
          What is a Subscription?
        </p>
      </div>
      <h1 className="cart-select-quantity-heading">SELECT QUANTITY</h1>
      <div className="cart-btn-row">
        <div className="cart-select-quantity-card">
          <button className="cart-select-quantity-btn">+</button>
          <p>1</p>
          <button className="cart-select-quantity-btn">-</button>
        </div>
        <button className="cart-add-btn">Add to cart</button>
      </div>
      <div className="cart-beauty-bundle-card">
        <div className="cart-beauty-bundle-card-row">
          <img
            src="https://res.cloudinary.com/dqpacvvei/image/upload/v1756558165/Button_-_Previous_slide_SVG_xynaua.png"
            className="beauty-bundle-backword-front-img"
          />
          <p className="beauty-bundle-paragraph">Beauty Bundle</p>
          <img
            src="https://res.cloudinary.com/dqpacvvei/image/upload/v1756558216/Button_-_Next_slide_SVG_n7cz4u.png"
            className="beauty-bundle-backword-front-img"
          />
        </div>
        <div className="beauty-bundle-product-items">
          <div>
            <img
              src="https://res.cloudinary.com/dqpacvvei/image/upload/v1756608961/066620652678ace2a8b18d99958799a6750696c0_unhpqq.png"
              className="beauty-bundle-images"
            />
            <p className="beauty-bundle-product-para">UMF 20+</p>
            <select
              id="weight-select"
              value={weight}
              onChange={e => setWeight(e.target.value)}
              className="beauty-bundle-select-weight"
            >
              <option value="250g">250g</option>
              <option value="500g">500g</option>
              <option value="1kg">1kg</option>
              <option value="2kg">2kg</option>
            </select>
          </div>
          <button className="adding-beauty-items">+</button>
          <div>
            <img
              src="https://res.cloudinary.com/dqpacvvei/image/upload/v1756609016/327394c3fd8ec3ec3d902b06fa874c76353a27e5_dmqcap.png"
              className="beauty-bundle-images"
            />
            <p className="beauty-bundle-product-para">UMF 24+</p>
            <select
              id="weight-select"
              value={weight}
              onChange={e => setWeight(e.target.value)}
              className="beauty-bundle-select-weight"
            >
              <option value="250g">250g</option>
              <option value="500g">500g</option>
              <option value="1kg">1kg</option>
              <option value="2kg">2kg</option>
            </select>
          </div>
          <button className="adding-beauty-items">+</button>
          <div>
            <img
              src="https://res.cloudinary.com/dqpacvvei/image/upload/v1756609086/999979079a923079d63d37a1077ca3eeb88fd930_nbyqvl.png"
              className="beauty-bundle-images"
            />
            <p className="beauty-bundle-product-para">Wooden Spoon</p>
          </div>
          <div className="beauty-bundle-price-details-card">
            <p className="beauty-bundle-price-paragraph">
              <span className="beauty-bundle-price-span">$478.75 USD</span>{' '}
              <span className="beauty-bundle-price-span2">$430.88 USD</span>{' '}
              <span className="beauty-bundle-price-span3">Save 10%</span>
            </p>
            <button className="beauty-bundle-addBundel">
              Add bundle to cart{' '}
            </button>
          </div>
        </div>
      </div>
      <div className="beauty-bundle-product-page">
        <div className="beauty-bundle-product-page-sider">
          <img
            src="https://res.cloudinary.com/dqpacvvei/image/upload/v1756621822/a4ae2eaca1629c3adae1c7714b22764214572002_eko3xo.png"
            className="delivery-details-img"
          />
          <p className="beauty-bundle-product-page-discription">
            Colourclub members earn up to
            <span className="beauty-bundle-product-page-span"> 56 </span> reward
            points when buy this item. <a href="#">Sign up or log in</a>
          </p>
        </div>
        <div className="delivery-estimation-card">
          <div>
            <h1 className="delivery-heading">Delivery</h1>
            <p className="delivery-discription">
              FREE DELIVERY ON ORDERS OVER $30
            </p>
          </div>
          <p className="delivery-date">
            ESTIMATED DELIVERY DATE: <br />
            Jun 9-Jun3to
          </p>
        </div>
        <hr />
        <h1 className="delivery-after-pay">After Pay</h1>
        <div className="delivery-after-row">
          <p className="delivery-after-interest">
            or 4 interest-free payments of $13.97 with
          </p>
          <img
            src="https://res.cloudinary.com/dqpacvvei/image/upload/v1756623476/Vector_nuxp8y.png"
            className="delivery-dollor-icon"
          />
          <p className="after-pay">AfterPay</p>
          <img
            src="https://res.cloudinary.com/dqpacvvei/image/upload/v1756561515/SVG_avy8rk.png"
            className="icon-after-pay"
          />
        </div>
        <hr />

        <div className="umf-scale">
          <h4>UMF™ Scale</h4>
          <div className="umf-bar">
            <div className="umf-data">
              <span className="umf-item">UMF™ 10+</span>
              <hr className="line-horzintal1" />
            </div>
            <div className="umf-data">
              <span className="umf-item">UMF™ 15+</span>
              <hr className="line-horzintal2" />
            </div>
            <div className="umf-data">
              <span className="umf-item">UMF™ 20+</span>
              <hr className="line-horzintal3" />
            </div>
            <div className="umf-data">
              <span className="umf-item highlighted">UMF™ 24+</span>
              <hr className="line-horzintal4" />
            </div>
            <div className="umf-data">
              <span className="umf-item">UMF™ 26+</span>
              <hr className="line-horzintal6" />
            </div>
            <div className="umf-data">
              <span className="umf-item">UMF™ 28+</span>
              <hr className="line-horzintal7" />
            </div>
            <div className="umf-data">
              <span className="umf-item">UMF™ 30+</span>
              <hr className="line-horzintal8" />
            </div>
          </div>
        </div>

        <div className="taste-profile">
          <h4>Taste Profile</h4>
          <div className="taste-bar">
            <div className="gradient-container">
              <div className="gradient-bar" />
              <div className="center-circle" />
            </div>

            <div className="taste-row">
              <span>Clean & Intense</span>
              <span>Bold & Intense</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
