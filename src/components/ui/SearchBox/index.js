import styles from "./index.module.scss";
import Image from "next/image";

const SearchBox = () => {
  return (
    <div className={styles.searchBox}>
      {/* Icon */}
      <div className={styles.icon}>
        <Image
          src="/assets/icons/search.svg"
          alt="search"
          height={16}
          width={16}
        />
      </div>

      {/* TextBox */}
      <input type="text" placeholder="SEARCH" className={styles.searchInput} />
    </div>
  );
};

export default SearchBox;
