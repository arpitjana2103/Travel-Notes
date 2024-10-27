import { useState } from "react";
import PageNav from "../components/PageNav";
import styles from "./LoginPage.module.css";
import Button from "../components/Button";

function LoginPage() {
    const [email, setEmail] = useState("arpitjana@gmail.com");
    const [password, setPassword] = useState("123456789");

    return (
        <main className={styles.login}>
            <PageNav />
            <form className={styles.form}>
                <div className={styles.row}>
                    <label htmlFor="email">Email address</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className={styles.row}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div>
                    <Button type="primary">login</Button>
                </div>
            </form>
        </main>
    );
}

export default LoginPage;
