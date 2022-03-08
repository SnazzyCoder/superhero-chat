import styles from "./index.module.scss";

// Messages schema
// [{ text, time }]

const MessageGroup = ({ side, avatarElement, messages, time }) => {
  return (
    <div className={styles.wrapper}>
      {/* Avatar */}
      {side === "left" && (
        <div className={styles.avatarWrapper}>
          {avatarElement}
          <text className={styles.time}>{time}</text>
        </div>
      )}

      {/* Messages */}
      <div className={styles.messagesWrapper}>
        {messages?.map((message, index) => (
          <div
            className={[
              styles.message,
              { left: styles.left, right: styles.right }[side],
            ].join(" ")}
            key={index}
          >
            <div className={styles.messageText}>{message.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessageGroup;
