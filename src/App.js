import React, { useState } from 'react'
import {
  CartFill,
  PersonFill,
  ChevronDown,
  CircleFill,
  ChevronLeft,
  ChevronRight,
  Search
} from 'react-bootstrap-icons';
import './App.css';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="chicks-gold">
      <header >
        <div className="container-header">
          <img src="https://chicksgold.com/logo/chicks-logo-large.svg" alt="Chicks Gold Logo" className="logo" />
          <nav>
            <ul>
              <li><a href="#">CURRENCY <ChevronDown /></a></li>
              <li><a href="#">ITEMS <ChevronDown /></a></li>
              <li><a href="#">ACCOUNTS <ChevronDown /></a></li>
              <li><a href="#">SERVICES <ChevronDown /></a></li>
              <li><a href="#">SWAP <ChevronDown /></a></li>
              <li><a href="#">SELL <ChevronDown /></a></li>
            </ul>
          </nav>
          <div className="header-actions">
            <a href="#" className="cart">
              USD <ChevronDown />
            </a>
            <a href="#" className="cart">
              <CartFill /> CART (5)
            </a>
            <button className="sign-in">
              SIGN IN <PersonFill />
            </button>
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
              <img src="https://placehold.co/24x24?text=≡" alt="Menu" />
            </button>
          </div>
        </div>
      </header>

      <main className="container">
        <h1>Condimentum consectetur</h1>
        
        <div className="filters">
          <div className="filter-group">
            <select>
              <option>Select a game</option>
            </select>
            <div className="search-container">
              <button className="search-button">
                <Search />
              </button>
              <input type="text" placeholder="Search" />
            </div>
          </div>
          <div className="filter-group">
            <select>
              <option>Price: All</option>
            </select>
            <select>
              <option>Item Type: All</option>
            </select>
          </div>
        </div>

        <div className="product-grid">
          <div className="product-grid-header">
            <span>Showing 20 - from 125</span>
            <select>
              <option>Sort by: Featured</option>
            </select>
          </div>

          <div className="products">
            {[...Array(15)].map((_, index) => (
              <div key={index} className="product-card">
                <div class="badges-container">
                  <div className="badges">
                    {index % 3 !== 0 && <div className="sale-badge"><span><CircleFill /></span>ON SALE</div>}
                    <div className="stock-badge">In stock</div>
                  </div>
                  <div className='quantity'>
                    <select>
                      <option>1</option>
                    </select>
                  </div>
                </div>
                <div className="product-image">
                  <img src="https://chicks-products.s3.amazonaws.com/3d762196-8b27-4a4d-84c0-48faf73761b1" alt="Game Item" />
                </div>
                <div class="icon-game">
                  <h3>Blue Partyhat</h3>
                  <span>
                    <img src="https://chicks-games.s3.amazonaws.com/868e80f5-c433-4a00-9596-21472fac7601" />
                  </span>
                </div>
                <div className="product-price">
                  <span className="current-price">$450.00</span>
                  <span className="original-price">$500.00</span>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit</p>
                <div className="product-actions">
                  <button className="details-button">DETAILS</button>
                  <button className="add-button">
                    ADD <span><CartFill /></span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="pagination">
            <button className="page-button prev-next"><ChevronLeft /></button>
            <button className="page-button active">1</button>
            <button className="page-button">2</button>
            <button className="page-button">3</button>
            <button className="page-button">4</button>
            <span className="ellipsis">...</span>
            <button className="page-button">11</button>
            <button className="page-button prev-next"><ChevronRight /></button>
          </div>
        </div>
      </main>

      <footer>
        <div className="container">
          <div className="footer-top">
            <div className="payment-methods">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/800px-Visa_Inc._logo.svg.png?20170118154621" alt="Visa" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/772px-Mastercard-logo.svg.png" alt="Mastercard" />
              <img src="https://www.svgrepo.com/show/266068/american-express.svg" alt="American Express" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Skrill_logo.svg" alt="Skrill" />
              <span>and 50+ more</span>
            </div>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><img src="https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000" alt="Facebook" /></a>
              <a href="#" aria-label="Twitter"><img src="https://img.icons8.com/?size=100&id=13963&format=png&color=000000" alt="Twitter" /></a>
              <a href="#" aria-label="Instagram"><img src="https://img.icons8.com/?size=100&id=32323&format=png&color=000000" alt="Instagram" /></a>
              <a href="#" aria-label="Discord"><img src="https://img.icons8.com/?size=100&id=30998&format=png&color=000000" alt="Discord" /></a>
            </div>
          </div>
          <div className="footer-divider"></div>
          <div className="footer-content">
            <div className="footer-logo">
              <img src="https://chicksgold.com/logo/chicks-logo-large.svg" alt="Chicks Gold Logo" />
              <p>support@chicksgold.com</p>
            </div>
            <div className="footer-links">
              <div>
                <h4>Chicks Gold</h4>
                <ul>
                  <li><a href="#">Games</a></li>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Sitemap</a></li>
                </ul>
              </div>
              <div>
                <h4>Support</h4>
                <ul>
                  <li><a href="#">Contact Us</a></li>
                  <li><a href="#">FAQ</a></li>
                </ul>
              </div>
              <div>
                <h4>Legal</h4>
                <ul>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Terms of Service</a></li>
                  <li><a href="#">Copyright Policy</a></li>
                </ul>
              </div>
            </div>
            <div className="trustpilot">
              <div>★★★★★</div>
              <span>Trustpilot Reviews</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}