import { ChangeEventHandler } from 'react';

export type TCheckboxProps = {
    onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
    checked?: boolean;
};
