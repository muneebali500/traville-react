import styles from "./header.module.scss";

function Header() {
  return (
    <header>
      <div className={styles.Container} id="home">
        <h1>
          We <span>Strive</span> to Make Your <br /> <span>Travel</span>{" "}
          Experience <br />
          <span> Smooth</span>
        </h1>
        <p>
          Travel opens your heart, broadens your mind and fills your life with
          stories to tell. So, wherever you go, go with all your heart.
        </p>

        <a href="#contact" role="button">
          Contact Us
        </a>
      </div>
    </header>
  );
}

export default Header;
