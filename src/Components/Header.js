import React, { Component } from 'react'
import MenuIcon from './svg/MenuIcon.svg'
import CloseIcon from './svg/CloseIcon.svg'
import CartIcon from './svg/CartIcon.svg'
import '../css/Header.css'
import {DataContext} from './Context'
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom';
export class Header extends Component {
    static contextType = DataContext;
    state = {
        toggle: false
    }
    menuToggle = () => {
        this.setState({toggle: !this.state.toggle})
    }
  render() {
    const {toggle} = this.state;
    const {cart} = this.context;
    return (
      <header>
        <div className="menu" onClick={this.menuToggle}>
            <img src={MenuIcon} width="20" alt="" />
        </div>
        <div className="logo">
            <h1><Link to="/">VANS</Link></h1>
        </div>
        <nav>
            <ul className={toggle ? "toggle" : ""} >
                <li><Link to="/">TRANG CHỦ</Link></li>
                <li><Link to="/product">SẢN PHẨM</Link></li>
                <li><Link to="/contact">LIÊN HỆ</Link></li>
                <li><Link to="/about">VỀ CHÚNG TÔI</Link></li>
                <li><Link to="/login">ĐĂNG NHẬP</Link></li>
                <li className="close" onClick={this.menuToggle} >
                    <img src={CloseIcon} alt="" width="20" />
                </li>
            </ul>
            <div className="nav-cart">
                <span>{cart.length} </span>
                <Link to="/cart">
                    <img src={CartIcon} width="20" alt="" />
                </Link>
            </div>
        </nav>
      </header>
    );
  }
}




export default Header;