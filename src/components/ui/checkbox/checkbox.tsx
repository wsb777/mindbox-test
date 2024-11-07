import { FC } from 'react';
import { TCheckboxProps } from './type';
import styles from './checkbox.module.css';
import clsx from 'clsx';

export const CheckboxUI: FC<TCheckboxProps> = ({ onChange, checked }) => {
    return (
        <label className={styles.label}>
            <svg
                className={checked ? clsx(styles.svg, styles.active) : clsx(styles.svg)}
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
                width="20px"
                height="20px"
                viewBox="0 0 1920 1920">
                <path d="M1827.701 303.065 698.835 1431.801 92.299 825.266 0 917.564 698.835 1616.4 1919.869 395.234z" />
            </svg>
            <input className={styles.input} onChange={onChange} type="checkbox" checked={checked} />
        </label>
    );
};
