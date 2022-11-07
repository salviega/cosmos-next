import styles from "./Layout.module.scss";
import React from "react";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { Wallet } from "../Wallet";

export function Layout({ children }) {
  return (
    <React.Fragment>
      <Navbar>
        <Wallet />
      </Navbar>
      <main className={styles.main}>{children}</main>
      <Footer />
    </React.Fragment>
  );
}
