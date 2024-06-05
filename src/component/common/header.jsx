import React from "react";
import search from "../../image/header_logo1.svg"
import candidate from "../../image/header_logo2.svg"
import items from "../../image/header_logo3.svg"
import heart from "../../image/header_logo4.svg"
import menu_item from "../../image/toggle.svg"
import free_shipping from "../../image/free_shipping.svg"
import money_back from "../../image/money_back.svg"
import support from "../../image/support.svg"

const Header = () => {
    return (<>
        <div className="container">
            <div className="all_headers">
                <div>
                    <img src="https://image1.jdomni.in/storeLogo/10112023/1E/3F/3B/FBE492F51ED9B4BBC405EA248B_1699593629045.png?output-format=webp" className="header_logo" />
                </div>
                <div className="header_right">
                    <img src={search} alt="error" className="header_search mobile_search" />
                    <img src={candidate} alt="error" className="header_search " />
                    <img src={items} alt="error" className="header_search" />
                    <img src={heart} alt="error" className="header_search mobile_search" />
                    <img src={menu_item} alt="error" className="header_menu" />
                </div>
            </div>
            <div className="divider"></div>
            <ul className="header_navbar">
                <li><a href="#" className="header_pages xxxl_body_text">HOME</a></li>
                <li><a href="#" className="header_pages xxxl_body_text">STORE</a></li>
                <li><a href="#" className="header_pages xxxl_body_text">ACCESSORIES</a></li>
                <li><a href="#" className="header_pages xxxl_body_text">BRAND</a></li>
                <li><a href="#" className="header_pages xxxl_body_text">PAGES</a></li>
                <li><a href="#" className="header_pages xxxl_body_text">ABOUT US</a></li>
                <li><a href="#" className="header_pages xxxl_body_text">NEWS</a></li>
                <li><a href="#" className="header_pages xxxl_body_text">CONTACT US</a></li>
            </ul>
            <div className="divider"></div>
            <div className="header_advertisement">
                <span className="header_offers">
                    <img src={free_shipping} alt="error" />
                    <h1 className="sm_body_text">FREE SHIPPING</h1>
                </span>
                <span className="header_offers">
                    <img src={money_back} alt="error" />
                    <h1 className="sm_body_text">100% MONEY BACK</h1>
                </span>
                <span className="header_offers mobile_offers">
                    <img src={support} alt="error" />
                    <h1 className="sm_body_text">SUPPORT 24/7</h1>
                </span>
            </div>
        </div>
    </>)
}
export default Header;