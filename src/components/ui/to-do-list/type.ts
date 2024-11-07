import { Dispatch, KeyboardEvent, RefObject, SetStateAction } from 'react';
import { TTask } from '../../utils/types';

export type ToDoListProps = {
    inputText: string | undefined;
    store: TTask[];
    onKeyDown: (e: KeyboardEvent<HTMLInputElement>, key: string) => void;
    inputRef: RefObject<HTMLInputElement>;
    setStore: Dispatch<SetStateAction<TTask[]>>;
    keyDown: string;
    visible: boolean;
    onClick: () => void;
};
