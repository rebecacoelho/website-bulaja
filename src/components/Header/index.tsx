import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import Image from 'next/image';
import Logo from '../../../public/logo.png'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src={Logo} alt="Logo" width={70} height={40} />
        </Link>
      </div>
      <div className={styles.linksContainer}>
        <div className={styles.links}>
          <Link className={styles.link} href="/">
            Home
          </Link>
          <Link className={styles.link} href="/encontre-seu-remedio">
            Encontre seu Remédio
          </Link>
        </div>
        <div className={styles.profile}>
        {/* Adicione aqui a foto de perfil do usuário */}
      </div>
      </div>
    </header>
  );
};