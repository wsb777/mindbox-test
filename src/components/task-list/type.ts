import { Dispatch, SetStateAction } from 'react';
import { TTask } from '../utils/types';

export type TTaskListProps = {
    store: TTask[];
    setStore: Dispatch<SetStateAction<TTask[]>>;
    visible: boolean;
};
