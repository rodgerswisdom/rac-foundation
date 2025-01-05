import logo from "../../assets/21751412_6525428.svg"
import "./Navbar.css"

function Navbar() {
    return(
        <nav className="navbar">
            <div className="nav-container">
            <img src={logo} alt="Logo" className="nav-logo" />
                <ul className="nav-links">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Gallery</li>
                    <li>Contact Us</li>
                </ul>
            </div>  
        </nav>
    )
}

export default Navbar