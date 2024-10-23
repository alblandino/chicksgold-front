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
              <img src="https://placehold.co/50x30?text=Visa" alt="Visa" />
              <img src="https://placehold.co/50x30?text=MC" alt="Mastercard" />
              <img src="https://placehold.co/50x30?text=AmEx" alt="American Express" />
              <img src="https://placehold.co/50x30?text=Skrill" alt="Skrill" />
              <span>and 50+ more</span>
            </div>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><img src="https://placehold.co/24x24?text=FB" alt="Facebook" /></a>
              <a href="#" aria-label="Twitter"><img src="https://placehold.co/24x24?text=TW" alt="Twitter" /></a>
              <a href="#" aria-label="Instagram"><img src="https://placehold.co/24x24?text=IG" alt="Instagram" /></a>
              <a href="#" aria-label="Discord"><img src="https://placehold.co/24x24?text=DC" alt="Discord" /></a>
            </div>
          </div>
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

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap');

        .chicks-gold {
          font-family: 'Ubuntu', sans-serif;
          background-color: #1a1c29;
          color: white;
          min-height: 100vh;
          background-image: url('https://images.unsplash.com/photo-1474779751981-5d6bb8cb0a35?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 20px;
        }
        .container-header {
          margin: 0 auto;
          padding: 0 20px;
        }
        header {
          background-color: #1a1c29;
          opacity: 0.7;
          border-bottom: 1px solid #2e3041;
          padding: 20px 0;
        }

        header .container-header {
          display: flex;
          justify-content: space-between;
        }

        .logo {
          height: 40px;
        }

        nav ul {
          display: flex;
          list-style-type: none;
          padding: 0;
        }

        nav ul li {
          margin-right: 50px;
        }

        nav ul li a {
          color: white;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
        }

        .header-actions {
          display: flex;
          align-items: center;
        }

        .currency-select, .cart, .sign-in {
          margin-left: 50px;
        }

        .currency-select {
          background-color: #1a1c29;
          border: 1px solid #2e3041;
          color: white;
          padding: 8px 12px;
          border-radius: 4px;
          font-size: 14px;
        }

        .cart {
          color: white;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
        }
        .badges-container {
          display: flex;
          height: 60px;
          flex: 1;
          justify-content: space-between;
        }
        .badges-container .quantity{
          width: 50px;
          overflow: hidden;
        }

        .sign-in {
          background-color: rgb(57 226 157);
          color: #1a1c29;
          border: none;
          padding: 10px 20px;
          border-radius: 4px;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
        }

        .menu-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
        }

        main {
          padding: 40px 0;
        }

        h1 {
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 24px;
        }

        .filters {
          display: flex;
          justify-content: space-between;
          margin-bottom: 24px;
        }

        .filter-group {
          display: flex;
        }

        .filter-group > * {
          margin-right: 12px;
        }

        .search-container {
          position: relative;
        }

        input[type="text"], select {
          background-color: #2e3041;
          border: 1px solid #3e4155;
          color: white;
          padding: 10px 12px;
          border-radius: 4px;
          font-size: 14px;
        }

        input[type="text"]::placeholder {
          color: #6c7293;
        }

        .search-button {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          cursor: pointer;
          color: white;
        }

        .product-grid {
          background-color: rgb(48 49 65);
          border-radius: 8px;
          padding: 24px;
          border: 1px solid rgb(76 96 133);
          box-shadow: 0 4px 4px rgb(76 96 133);
        }

        .product-grid-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }

        .product-grid-header span {
          font-size: 14px;
          color: white;
        }

        .products {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 24px;
        }
        .products .icon-game {
          display: flex;
          justify-content: space-between;
          align-items: end;
        }
        .products .icon-game img {
          border: 1px solid rgb(56 223 156);
          border-radius: 50px;
          padding: 2px 10px;
        }

        .product-card {
          background-color: rgb(50 54 72);
          border-radius: 8px;
          padding: 16px;
        }
        .product-card p {
          color: rgba(255, 255, 255, 0.5) !important;
        }

        .product-image {
          width: 30%;
          margin-bottom: 12px;
        }

        .product-image img {
          width: 100%;
          border-radius: 4px;
        }
        .sale-badge {
          color: white;
          padding: 4px 0px;
          font-size: 12px;
          display: flex;
          align-items: center;
        }
        .sale-badge span {
          color: rgb(57 226 157);
          font-size: 6px;
          margin-right: 5px;
        }
        .stock-badge {
          top: 8px;
          left: 8px;
          background-color: transparent;
          color: rgb(54 156 122);
          border: 1px solid rgb(54 156 122);
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 700;
        }

        .product-card h3 {
          font-size: 16px;
          font-weight: 500;
          margin-bottom: 8px;
          font-weight: 400;
        }

        .product-price {
          display: flex;
          align-items: center;
          margin-bottom: 8px;
        }

        .current-price {
          color: white;
          font-weight: 500;
          font-size: 18px;
          margin-right: 8px;
        }

        .original-price {
          text-decoration: line-through;
          color: #6c7293;
          text-decoration-color: red;
        }

        .product-card p {
          font-size: 14px;
          color: #6c7293;
          margin-bottom: 12px;
        }

        .product-actions {
          display: flex;
          justify-content: space-between;
          height: 40px;
          margin-top: 30px;
        }

        .details-button, .add-button {
          padding: 8px 16px;
          border: none;
          border-radius: 4px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
        }

        .details-button {
          background-color: rgb(53 57 75);
          color: rgba(255, 255, 255, .3);
        }

        .add-button {
          background-color: rgb(87 98 213);
          color: white;
        }
        .add-button span {
          background-color: rgb(69 77 168);
          padding: 7px;
          border-radius: 4px;
        }

        .pagination {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 24px;
        }

        .page-button {
          margin: 0 4px;
          padding: 8px 12px;
          background-color: transparent;
          border: none;
          color: white;
          cursor: pointer;
          font-size: 14px;
          border-radius: 4px;
        }

        .page-button.active {
          background-color: rgb(87 98 213);
          color: #1a1c29;
          border: 1px solid rgb(87 98 213);
        }

        .page-button.prev-next {
          border: 1px solid rgb(87 98 213);
        }

        .ellipsis {
          
          margin: 0 4px;
          color: #6c7293;
        }

        footer {
          background-color: #1a1c29;
          border-top: 1px solid #2e3041;
          padding: 40px 0;
        }

        .footer-top {
          display: flex;
          justify-content: space-between;
          margin-bottom: 40px;
        }

        .payment-methods, .social-links {
          display: flex;
          align-items: center;
        }

        .payment-methods img, .social-links a {
          margin-right: 12px;
        }

        .payment-methods span {
          font-size: 14px;
          color: #6c7293;
        }

        .social-links a {
          color: white;
          transition: opacity 0.3s ease;
        }

        .social-links a:hover {
          opacity: 0.7;
        }

        .footer-content {
          display: flex;
          justify-content: space-between;
        }

        .footer-logo img {
          height: 40px;
          margin-bottom: 12px;
        }

        .footer-logo p {
          font-size: 14px;
          color: #6c7293;
        }

        .footer-links {
          display: flex;
        }

        .footer-links > div {
          margin-right: 60px;
        }

        .footer-links h4 {
          font-size: 16px;
          font-weight: 700;
          margin-bottom: 16px;
        }

        .footer-links ul {
          list-style-type: none;
          padding: 0;
        }

        .footer-links ul li {
          margin-bottom: 8px;
        }

        .footer-links ul li a {
          color: #6c7293;
          text-decoration: none;
          font-size: 14px;
          transition: color 0.3s ease;
        }

        .footer-links ul li a:hover {
          color: white;
        }

        .trustpilot {
          text-align: right;
        }

        .trustpilot div {
          color: rgb(87 98 213);
          font-size: 24px;
          margin-bottom: 4px;
        }

        .trustpilot span {
          font-size: 14px;
          color: #6c7293;
        }

        @media (max-width: 768px) {
          .menu-toggle {
            display: block;
          }

          nav {
            display: none;
          }

          nav.open {
            display: block;
            position: absolute;
            top: 80px;
            left: 0;
            right: 0;
            background-color: #1a1c29;
            padding: 20px;
            z-index: 1000;
          }

          nav.open ul {
            flex-direction: column;
          }

          nav.open ul li {
            margin-bottom: 16px;
          }

          .header-actions .currency-select,
          .header-actions .cart,
          .header-actions .sign-in {
            display: none;
          }

          .filters {
            flex-direction: column;
          }

          .filter-group {
            margin-bottom: 16px;
          }

          .products {
            grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          }

          .footer-top, .footer-content {
            flex-direction: column;
          }

          .payment-methods, .social-links, .footer-logo, .footer-links, .trustpilot {
            margin-bottom: 24px;
          }

          .footer-links {
            flex-direction: column;
          }

          .footer-links > div {
            margin-right: 0;
            margin-bottom: 24px;
          }

          .trustpilot {
            text-align: left;
          }
        }
      `}</style>
    </div>
  )
}