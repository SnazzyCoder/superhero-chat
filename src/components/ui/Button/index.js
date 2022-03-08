import React from "react";
import styles from "./index.module.scss";
import Link from "next/link";

const ButtonLink = ({ children, ...props }) => {
  return (
    <Link {...props}>
      <div className={styles.wrapper}>{children}</div>
    </Link>
  );
};

export default ButtonLink;
