import { FC } from 'react';
import { TAppHeaderUIProps } from './type';
import styles from './app-header.module.css';

export const AppHeaderUI: FC<TAppHeaderUIProps> = ({ text }) => (
    <header className={styles.head}>
        <a className={styles.logo} href="/">
            {text}
        </a>
    </header>
);
