import { FaDiscord } from "react-icons/fa";

function Navbar() {
    return (
        <nav className="navbar">

            <div className="nav-links">
                <a href="#" className="nav-link active">Home</a>
                <a href="#" className="nav-link">HumanPods</a>
                <a href="#" className="nav-link">NatureOS</a>
                <a href="#" className="nav-link">Mission</a>
            </div>

            <div className="center-logo">
                Natura Umana
            </div>

            <div className="nav-buttons">
                <button className="btn-primary">Join Waitlist</button>
                <button className="btn-secondary">
                    <FaDiscord className="discord-icon"/>
                    Join Server
                </button>
            </div>
        </nav>
    );
}

export default Navbar;