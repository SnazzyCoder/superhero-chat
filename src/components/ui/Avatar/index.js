import React from "react";
import Image from "next/image";
import styles from "./index.module.scss";

const Avatar = ({ status, imageURI, title }) => {
  return (
    <div
      className={[
        {
          online: styles.online,
          offline: styles.offline,
          busy: styles.busy,
          away: styles.away,
        }[status],
        styles.avatarContainer,
      ].join(" ")}
    >
      <div className={styles.avatar}>
        <Image src={imageURI} alt={title} layout="fill" objectFit="cover" />
      </div>
    </div>
  );
};

export default Avatar;
