import Link from "next/link";
import styles from "./style.module.scss";
import { useState } from "react";
import Avatar from "../../assets/avatar.jpg";
import Image from "next/image";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div
          className={styles.navButton + ` ${menuOpen ? styles.active : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
        </div>
        <h1>
          <Image
            src={Avatar}
            alt="user"
            className={styles.avatar}
            width={50}
            height={50}
            style={{ marginRight: "10px" }}
          />
          <Link href="/" passHref>
            <span className={styles.title}> Lucio Ariel</span>
          </Link>
        </h1>
        <nav className={styles.nav + ` ${menuOpen ? styles.active : ""}`}>
          <ul>
            <li>
              <Link href="/">
                <a>Olá</a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
