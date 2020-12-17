import { ARCHIVE_CHECKBOX, PIN_CHECKBOX } from '../constants';
import { NamedCheckBox } from '../types';

export const isArchiveCheckbox = (element: HTMLElement) => {
    const { name } = element as NamedCheckBox;
    return (name === ARCHIVE_CHECKBOX) || undefined;
};

export const isPinCheckbox = (element: HTMLElement) => {
    const { name } = element as NamedCheckBox;
    return (name === PIN_CHECKBOX) || undefined;
};

export const isChecked = (element: HTMLElement) => {
    const { checked } = element as NamedCheckBox;
    return checked;
};