import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <>
        <p>yee</p>
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <NavLink className="nav-link" to="/compose-salad">
                    Komponera en sallad
                </NavLink>
            </li>
        </ul>
        </>);
};
export default Navbar;