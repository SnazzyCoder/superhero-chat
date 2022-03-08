import styles from "./index.module.scss";
import Avatar from "../Avatar";
import Image from "next/image";

const ChatCard = ({ imageURI, title, subtext, accentText, isVerified }) => {
  return (
    <div className={styles.container}>
      {/* Avatar */}
      <Avatar imageURI={imageURI} title={title} status="online" />

      {/* Content */}
      <div className={styles.content}>
        <div className={["block", styles.mainLine].join(" ")}>
          {/* Name */}
          <span>
            <text className={styles.title}>{title}</text>
            {/* Checkmark */}
            {isVerified && (
              <span className={styles.verification}>
                <Image
                  src="/assets/icons/verification-check.svg"
                  height={16}
                  width={16}
                  alt="Verified"
                />
              </span>
            )}
          </span>
          {/* Accent Text */}
          <text className={styles.accentText}>{accentText}</text>
        </div>
        {/* Subtext */}
        <div className="block">
          <text className={styles.subtext}>{subtext}</text>
        </div>
      </div>
    </div>
  );
};

export default ChatCard;
