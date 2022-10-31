import styles from "./Navbar.module.scss";
import logobbva from "@/public/logo-bbva.png";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "hook/context";
import { useRouter } from "next/router";

export function Navbar({ children }) {
  const auth = useAuth();
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <header className={styles.header}>
      <nav className={styles.header_menu}>
        <div className={styles.header_menu_left}>
          <Link href="/">
            <Image src={logobbva} alt="logobbva" />
          </Link>
        </div>
        <div className={styles.header_menu_center}>
          {auth.user.walletAddress === "Connect wallet" ? null : (
            <>
              <Link
                href="/"
                className={
                  currentRoute === "/"
                    ? styles.header_menu_center__item__active
                    : styles.header_menu_center__item
                }
              >
                Inicio
              </Link>
              <Link
                href="/maker"
                className={
                  currentRoute === "/maker"
                    ? styles.header_menu_center__item__active
                    : styles.header_menu_center__item
                }
              >
                Crear Beneficio
              </Link>
              <Link
                href="/marketplace"
                className={
                  currentRoute === "/marketplace"
                    ? styles.header_menu_center__item__active
                    : styles.header_menu_center__item
                }
              >
                Marketplacle
              </Link>
              <Link
                href="/gateway"
                className={
                  currentRoute === "/gateway"
                    ? styles.header_menu_center__item__active
                    : styles.header_menu_center__item
                }
              >
                Pago
              </Link>
              <Link
                href="/faucet"
                className={
                  currentRoute === "/faucet"
                    ? styles.header_menu_center__item__active
                    : styles.header_menu_center__item
                }
              >
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
