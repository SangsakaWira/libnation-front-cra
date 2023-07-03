import LOGO from "../assets/images/logo-nav.png"
import {
    Link,
  } from "react-router-dom";


function NavBar() {
    // Hanya bisa return 1 elemen
    return (
       <>
       <header>
        <nav className="nav">
            <div className="container">
                <div className="nav-wrap">
                    <div className="nav-left">
                        <a href="/">
                            <img className="logo" src={LOGO} alt="logo navbar"></img>
                        </a>
    
                        <ul className="nav-menu">
                            <li className="nav-item"><Link to="/">Home</Link></li>
                            <li className="nav-item"><Link to="/my-books">My Books</Link></li>
                            <li className="nav-item"><Link to="/add-book">Add Book</Link></li>
                            <li className="nav-item"><Link to="/checkout">Checkout</Link></li>
                        </ul>
                    </div>
                    <div className="nav-right">
                        <div className="nav-ellipse"></div>
                        <div className="nav-mobile" id="nav-mobile">
                            <img src="images/icon-close.svg" alt="close" class="close"></img>
                            <img src="images/icon-hamburger.svg" alt="hamburger menu" class="open"></img>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
       </>
    )
}

export default NavBar