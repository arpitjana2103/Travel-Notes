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
                    <NavLink to="/product">Product</NavLink>
                </li>
                <li>
                    <NavLink className={styles.ctaLink} to="/login">
                        login
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default PageNav;
