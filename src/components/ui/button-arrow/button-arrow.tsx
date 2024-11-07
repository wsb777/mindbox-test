import { FC } from 'react';
import { TButtonArrowProps } from './type';
import styles from './button-arrow.module.css';
import clsx from 'clsx';

export const ButtonArrowUI: FC<TButtonArrowProps> = ({ onClick, isActive }) => {
    return (
        <button
            className={isActive ? clsx([styles.button, styles.active]) : styles.button}
            onClick={onClick}>
            <svg
                width="19"
                height="11"
                viewBox="0 0 19 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M3.19492 0.596282L9.49992 6.90128L15.8049 0.596282C16.4387 -0.037468 17.4624 -0.037468 18.0962 0.596282C18.7299 1.23003 18.7299 2.25378 18.0962 2.88753L10.6374 10.3463C10.0037 10.98 8.97992 10.98 8.34617 10.3463L0.887422 2.88753C0.253672 2.25378 0.253672 1.23003 0.887422 0.596282C1.52117 -0.0212183 2.56117 -0.037468 3.19492 0.596282Z"
                    fill="#e6e6e6"></path>
            </svg>
        </button>
    );
};
