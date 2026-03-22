import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");
    const cartItem = useSelector((store)=> store.cart.items);

    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    src="https://adityarajsingh.github.io/Bhojanam/images/cover.jpg"
                    alt="logo"
                />
            </div>

            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart-{cartItem.length}</Link>
                    </li>
                    <li>
                        <button
                            className="login"
                            onClick={() => {
                                btnNameReact === "Login"
                                    ? setBtnNameReact("LogOut")
                                    : setBtnNameReact("Login");
                            }}
                        >
                            {btnNameReact}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;