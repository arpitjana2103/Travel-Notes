import PageNav from "../components/PageNav";
import styles from "./HomePage.module.css";

function HomePage() {
    return (
        <>
            <main className={styles.homepage}>
                <PageNav />
                <section>
                    <h1>
                        You travel the world.
                        <br />
                        Travel-Note keeps track of your adventures.
                    </h1>
                    <p>
                        A world map that tracks your footsteps into every city
                        you can think of. Never forget your wonderful
                        experiences, and show your friends how you have wandered
                        the world.
                    </p>
                    <a href="/app" className="cta">
                        Start Tracking Now
                    </a>
                </section>
            </main>
        </>
    );
}

export default HomePage;
