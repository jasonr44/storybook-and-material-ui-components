import { TaskProps } from '../Task';

export interface TaskListComponentProps {
    loading: boolean;
    tasks: TaskProps[];
    onArchiveTask: (id: string) => void;
    onPinTask: (id: string) => void;
};