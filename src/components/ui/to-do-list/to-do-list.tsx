import { FC } from 'react';
import styles from './to-do-list.module.css';
import { ToDoListProps } from './type';
import { TaskList } from '../../task-list';
import { ButtonArrowUI } from '../button-arrow';

export const ToDoListUI: FC<ToDoListProps> = ({
    onClick,
    visible,
    setStore,
    inputRef,
    inputText,
    onKeyDown,
    store,
    keyDown
}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.app}>
                <div className={styles.element}>
                    <ButtonArrowUI isActive={visible} onClick={onClick} />
                    <input data-cy="input"
                        className={styles.input}
                        onKeyDown={(e) => {
                            onKeyDown(e, keyDown);
                        }}
                        ref={inputRef}
                        placeholder={inputText}></input>
                </div>
                <TaskList visible={visible} store={store} setStore={setStore} />
            </div>
        </div>
    );
};
