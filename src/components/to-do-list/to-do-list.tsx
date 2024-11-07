import { FC, KeyboardEvent, useRef, useState } from 'react';
import { ToDoListUI } from '../ui/to-do-list';
import { TTask } from '../utils/types';

export const ToDoList: FC = () => {
    const initialData: TTask[] = [
        { content: 'Сделать тз', completed: true },
        { content: 'Помыть посуду', completed: false }
    ];
    const [data, setData] = useState(initialData);

    const [isVisible, setVisible] = useState(true);

    const toggleVisible = () => {
        setVisible(!isVisible);
    };

    const inputRef = useRef<HTMLInputElement>(null);

    const addTask = (e: KeyboardEvent<HTMLInputElement>, key: string) => {
        if (e.key === key) {
            if (inputRef.current?.value != null && inputRef.current?.value != '') {
                setData([
                    ...data,
                    {
                        content: inputRef.current?.value,
                        completed: false
                    }
                ]);
                inputRef.current.value = '';
            }
        }
    };

    return (
        <ToDoListUI
            inputRef={inputRef}
            onClick={toggleVisible}
            onKeyDown={addTask}
            inputText="What needs to be done?"
            store={data}
            setStore={setData}
            keyDown={'Enter'}
            visible={isVisible}
        />
    );
};
