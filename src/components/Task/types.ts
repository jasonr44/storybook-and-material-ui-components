export enum TaskState {
    TASK_INBOX = 'TASK_INBOX',
    TASK_PINNED = 'TASK_PINNED',
    TASK_ARCHIVED = 'TASK_ARCHIVED'
};

export interface TaskProps {
    id: string;
    title: string;
    state: TaskState;
    updatedAt: Date
};

export interface TaskComponentProps {
    task: TaskProps;
    onArchiveTask: (id: string) => void;
    onPinTask: (id: string) => void;
};

export interface NamedCheckBox extends HTMLElement {
    name: string;
};