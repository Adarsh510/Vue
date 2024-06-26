// Footer.jsx

import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles/footer.module.css";

const Footer = () => {
  return (
    <footer className={`mb-0 p-4 ${styles.footer}`}>
      <div className="row"></div>

      <div className={`${styles.footerBottom}`}>
        <Link to="/">
          {/* <p style={{ textAlign: "center" }}>Adarsh Raveendran</p> */}
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

