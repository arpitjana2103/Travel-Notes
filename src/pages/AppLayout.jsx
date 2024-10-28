import { CitiesProvider } from "../contexts/CitiesContext";
import SideBar from "../components/SideBar";
import styles from "./AppLayout.module.css";

function AppLayout() {
    return (
        <CitiesProvider>
            <div className={styles.app}>
                <SideBar />
            </div>
        </CitiesProvider>
    );
}

export default AppLayout;
