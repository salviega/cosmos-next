import styles from "./Footer.module.scss";
import logobbva from "@/public/logo-bbva.png";
import React from "react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <div className={styles.footer_container_left}>
          <Image src={logobbva} alt="logo" />
          <p>® BBVA Todos los derechos reservados</p>
        </div>
        <div className={styles.footer_container_right}>
          <div className={styles.footer_container_right_social}>
            <p className={styles.footer_container__head}>Redes sociales:</p>
            <p className={styles.footer_container__item}>Instagram</p>
            <p className={styles.footer_container__item}>Facebook</p>
            <p className={styles.footer_container__item}>Twitter</p>
            <p className={styles.footer_container__item}>Blog BBVA</p>
          </div>
          <div className={styles.footer_container_right_more}>
            <p className={styles.footer_container__head}>Links de interés:</p>
            <p className={styles.footer_container__item}>Sobre BBVA</p>
            <p className={styles.footer_container__item}>Centro de atención</p>
            <p className={styles.footer_container__item}>
              Términos y condiciones
            </p>
            <p className={styles.footer_container__item}>
              Política de privacidad
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
