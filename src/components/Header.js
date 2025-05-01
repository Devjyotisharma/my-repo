import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [login, setLogin] = useState("Login");

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo"
                src={LOGO_URL} alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        Online Status: { useOnlineStatus() ? "✅" : "❌"} 
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>                   
                    </li>  
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/grocery">Grocery</Link>
                    </li>        
                    <li>Cart</li>
                    <button className="login-btn" onClick={() => {
                        setLogin(login === "Login" ? "Logout" : "Login");    
                    }}>{login}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;