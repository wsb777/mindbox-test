import { FC, memo } from 'react';
import { TTaskListProps } from './type';
import styles from './task-list.module.css';
import { CheckboxUI } from '../checkbox';
import clsx from 'clsx';

export const TaskListUI: FC<TTaskListProps> = memo(
    ({ onClickAll, onClickActive, onClickCompleted, clearCompleted, visible, onChange, store }) => (
        <div className={styles.text}>
            <ul data-cy="list" className={visible ? clsx(styles.list, styles.active) : clsx(styles.list)}>
                {store.map((task, i) => (
                    <li data-cy={'checkbox'} className={styles.element} key={i}>
                        <CheckboxUI onChange={() => onChange(i)} checked={task.completed} />
                        <p className={styles.content}>{task.content}</p>
                    </li>
                ))}
            </ul>
            <menu className={styles.menu}>
                <p className={styles.count}>
                    {store.filter((e) => {
                        if (e.completed === false) {
                            return e;
                        }
                    }).length + ' '}
                    items left
                </p>
                <div className={styles.tags}>
                    <button data-cy={'button-all'} onClick={onClickAll}>All</button>
                    <button data-cy={'button-active'} onClick={onClickActive}>Active</button>
                    <button data-cy={'button-completed'} onClick={onClickCompleted}>Completed</button>
                </div>
                <button data-cy={'button-clear'} onClick={clearCompleted}>Clear completed</button>
            </menu>
        </div>
    )
);
