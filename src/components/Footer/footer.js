import React from "react";
import style from "./footer.module.css";

const Footer = () => {
  return (
    <>
      <footer className={style["footer"]}>

          <p>
        Website by
          <a className={style["footer-link"]} href="https://github.com/rajkale99 "
            >  <b>Raj Kale</b></a
          >
          <br />
          Copyright &copy; 2021 LegionOS.
      </p>
      </footer>
    </>
  );
};
export default Footer
