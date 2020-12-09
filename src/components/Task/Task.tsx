import React, { FC } from 'react';
import { TaskComponentProps } from './types';


const Task: FC<TaskComponentProps> = ({ task: { id, title, state }, onArchiveTask, onPinTask }) => {
    return (
        <div className="list-item">
            <input type="text" value={title} readOnly />
        </div>
    );
};

export default Task;