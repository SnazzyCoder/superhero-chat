import Link from "next/link";
import styles from "./index.module.scss";
import Image from "next/image";

const Header = () => {
  return (
    <header className={styles.header}>
      {/* Left side */}
      <div className={styles.left}>
        <Link href="/">
          <a className={styles.logo}>
            <Image
              src="/assets/images/logo.svg"
              alt="Superhero Chat"
              height={50}
              width={140}
            />
          </a>
        </Link>
      </div>

      {/* Right Side */}
      <nav className={styles.nav}>
        <Link href="/home">
          <a className={styles.navItem}>Home</a>
        </Link>
        <Link href="/chat">
          <a className={styles.navItem}>Chat</a>
        </Link>
        <Link href="/about" passHref={true}>
          <Image src="/assets/icons/github.svg" height={20} width={20} alt="github" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
