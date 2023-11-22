import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="navbar navbar-expanded-lg navbar-light bg-light">
            <ul className="navbar-nav me-auto mb-lg-0">
                <li className="nav-item">
                    <link className="nav-link" to="/">Home</link>
                </li>
                <li className="nav-item">
                    <link className="nav-link" to="/GropupedTeamMembers">GropupedTeamMembers</link>

                </li>
            </ul>
        </nav>
    )
}
export default Nav;