import styles from "./Navbar.module.scss";
import logobbva from "@/public/logo-bbva.png";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "hook/context";

export function Navbar({ children }) {
  const auth = useAuth();
  return (
    <header className={styles.header}>
      <nav className={styles.header_menu}>
        <div className={styles.header_menu_left}>
          <Link href="/">
            <Image src={logobbva} alt="logobbva" />
          </Link>
        </div>
        <div className={styles.header_menu_center}>
          {auth.user.walletAddress === 'Connect wallet' ? null : (
            <>
              <Link href="/" className={styles.header_menu_center__item}>
                Inicio
              </Link>
              <Link href="/maker" className={styles.header_menu_center__item}>
                Crear Beneficio
              </Link>
              <Link
                href="/marketplace"
                className={styles.header_menu_center__item}
              >
                Marketplacle
              </Link>
              <Link href="/gateway" className={styles.header_menu_center__item}>
                Pago
              </Link>
              <Link href="/faucet" className={styles.header_menu_center__item}>
                Faucet
              </Link>
            </>
          )}
        </div>
        {children}
      </nav>
    </header>
  );
}
