import { FC, useEffect, useState } from 'react';
import { TaskListUI } from '../ui/task-list';
import { TTaskListProps } from './type';

export const TaskList: FC<TTaskListProps> = ({ visible, store, setStore }) => {
    const onChange = (index: number) => {
        setStore(
            store.map((task, currentIndex) =>
                currentIndex === index ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const clearCompleted = () => {
        setStore(store.filter((task) => (!task.completed ? { ...task } : null)));
    };

    const [filterView, setFilter] = useState<string>('all');

    const onClickAll = () => {
        setFilter('all');
    };

    const onClickActive = () => {
        setFilter('active');
    };

    const onClickCompleted = () => {
        setFilter('completed');
    };

    const [currentStore, setCurrentStore] = useState(store);
    const filteredStore = () => {
        if (filterView === 'active') {
            return store.filter((task) => (!task.completed ? task : null));
        } else if (filterView === 'completed') {
            return store.filter((task) => (task.completed ? task : null));
        } else {
            return store;
        }
    };
    useEffect(() => setCurrentStore(filteredStore()), [filterView, store]);

    return (
        <TaskListUI
            onClickAll={onClickAll}
            onClickActive={onClickActive}
            onClickCompleted={onClickCompleted}
            clearCompleted={clearCompleted}
            visible={visible}
            store={currentStore}
            onChange={onChange}
        />
    );
};
