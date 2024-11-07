import { TTask } from '../../utils/types';

export type TTaskListProps = {
    store: TTask[];
    onChange: (index: number) => void;
    visible: boolean;
    clearCompleted: () => void;
    onClickAll: () => void;
    onClickActive: () => void;
    onClickCompleted: () => void;
};
