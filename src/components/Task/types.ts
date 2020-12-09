export enum TaskState {
    TASK_INBOX,
    TASK_PINNED,
    TASK_ARCHIVED
};

export interface TaskProps {
    id: string;
    title: string;
    state: TaskState;
    updatedAt: Date
};

export interface TaskComponentProps {
    task: TaskProps;
    onArchiveTask: () => void;
    onPinTask: () => void;
};