import "./Navbar.css"
function Navbar() {
    return(
        <nav className="navbar">
            <div className="nav-container">
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