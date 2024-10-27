import styles from "./Logo.module.css";
function Logo() {
    return (
        <div className={styles.logo}>
            <img src="/logo.png" alt="Travel-Note" /> <span>Travel-Notes</span>
        </div>
    );
}

export default Logo;
