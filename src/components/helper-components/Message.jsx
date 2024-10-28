import styles from "./Message.module.css";
import Emoji from "./Emoji";

function Message({ message, type = "message" }) {
    let emoji = "👋";
    if (type === "error") emoji = "👋";
    return (
        <p className={styles.message}>
            <Emoji emoji={emoji} /> &nbsp; &nbsp;
            {message}
        </p>
    );
}

export default Message;
