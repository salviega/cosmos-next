import React from "react";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { Wallet } from "../Wallet";

export function Layout({ children }) {
  return (
    <>
      <Navbar>
        <Wallet />
      </Navbar>
      {children}
      <Footer />
    </>
  );
}
