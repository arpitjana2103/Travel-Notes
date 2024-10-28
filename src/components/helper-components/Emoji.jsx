import styles from "./Emoji.module.css";

function isOnlyEmojis(text) {
    const emojiRegex =
        /^(?:[\u2700-\u27BF]|[\uE000-\uF8FF]|[\uD83C-\uDBFF\uDC00-\uDFFF]|\uFE0F|\u200D)+$/u;
    return emojiRegex.test(text);
}

function Emoji({ emoji }) {
    const isEmoji = isOnlyEmojis(emoji);
    return (
        <span className={styles.emoji}>
            {isEmoji ? emoji : "💀 Emoji Error !!"}
        </span>
    );
}

export default Emoji;
