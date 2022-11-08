import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../style/topHeader.scss";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { removeCart } from "../../redux/action";

function TopHeader(props) {
  const dispatch = useDispatch();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const { favourites, cart } = useSelector((state) => state);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const toggle2 = () => setDropdownOpen2((prevState) => !prevState);

  const handleTotalPrice = () => {
    let total = 0;
    cart.forEach((item) => {
      total = total + item.price;
    });
    return total;
  };
  // const deleteCartItem = (product) => {
  //   dispatch(removeCart(product));
  // };
  return (
    <div className="top_header">
      <Link to="/" className="logo">
        <img
          src="https://asaxiy.uz/custom-assets/images/logos/asaxiy-logo.svg"
          alt="asaxiy-logo"
        />
      </Link>
      <div className="navbar_search">
        <input type="text" placeholder="Поиск..." />
        <button className="search" type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
          <p>Искать </p>
        </button>
      </div>
      <div className="action_list">
        <div className="header_top_paying">
          <Link to="/order-pay">
            <img
              src="	https://asaxiy.uz/custom-assets/images/icons/header/payment.svg"
              alt="pay-icon"
            />
            <span>Оплатить</span>
          </Link>
        </div>
        <div className="header_top_track">
          <Link to="/order-status">
            <img
              src="	https://asaxiy.uz/custom-assets/images/icons/header/tracker.svg"
              alt="order-track"
            />
            <span>Отследить</span>
          </Link>
        </div>
        <div className="for_dropdown header_top_lang">
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>
              <img
                src="	https://asaxiy.uz/custom-assets/images/icons/header/language.svg"
                alt="lang"
              />
              <span>Русский</span>
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>O'zbekcha</DropdownItem>
              <DropdownItem header>Русский</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
        <div className="header_top_cart">
          <div className="cart_header">
            <img
              src="https://asaxiy.uz/custom-assets/images/icons/header/cart.svg"
              alt="cart"
            />
            <span>Корзинка</span>
            <div className="counter">{cart.length}</div>
          </div>
          <div className="cart_modal">
            <div className="cart_wrapper">
              <div className="cart_modal_top">
                {cart.map((item) => (
                  <div className="card" key={item.id}>
                    <div className="for_image">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="for_title">
                      <Link to="/singleProduct">{item.title}</Link>
                    </div>
                    <div className="for_price">${item.price}</div>
                    <div
                      className="for_deleting"
                      onClick={() => dispatch(removeCart(item.id))}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-x"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
              <div className="cart_modal_footer">
                <div className="cart_modal_payment">
                  <p>Сумма</p>
                  <h3>{handleTotalPrice()} сум</h3>
                </div>
                <div className="cart_modal_actions">
                  <Link to="/cart/checkout">
                    <button className="making_purchase">
                      оформить покупку
                    </button>
                  </Link>
                  <Link to="/cart">
                    <button className="go_to_cart">перейти в корзинку</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="top_header_favourites">
          <Link to="/favourites">
            <img
              src="https://asaxiy.uz/custom-assets/images/icons/header/heart.svg"
              alt="favourites"
            />
            <span>Избранное</span>
            <div className="counter">{favourites.length}</div>
          </Link>
        </div>
        <div className="top_header_login">
          <Link to="/">
            <img
              src="	https://asaxiy.uz/custom-assets/images/icons/header/avatar.svg"
              alt="login"
            />
            <span>Кабинет</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
