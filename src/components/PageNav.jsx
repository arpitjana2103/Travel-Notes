import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import styles from "./PageNav.module.css";

function PageNav() {
    return (
        <nav className={styles.nav}>
            <NavLink to="/">
                <Logo />
            </NavLink>
            <ul>
                <li>
                    <NavLink to="/pricing">Pricing</NavLink>
                </li>
                <li>
                    <NavLink to="/product">Pricing</NavLink>
                </li>
                <li>
                    <NavLink className={styles.ctaLink} to="/login">
                        Login
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default PageNav;