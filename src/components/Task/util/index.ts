import { ARCHIVE_CHECKBOX, PIN_CHECKBOX } from '../constants';
import { NamedCheckBox } from '../types';

export const isArchiveCheckbox = (element: HTMLElement) => {
    const { name } = element as NamedCheckBox;
    return (name === ARCHIVE_CHECKBOX) ? element : undefined;
};

export const isPinCheckbox = (element: HTMLElement) => {
    const { name } = element as NamedCheckBox;
    return (name === PIN_CHECKBOX) ? element : undefined;
};

export const isChecked = (element: HTMLElement) => {
    const { checked } = element as NamedCheckBox;
    return checked;
};

export const isNotPinCheckbox = (element: HTMLElement) => {
    const { name } = element as NamedCheckBox;
    return (name !== PIN_CHECKBOX) ? element : undefined;
};

export const isNotChecked = (element: HTMLElement) => {
    const { checked } = element as NamedCheckBox;
    return !checked;
};