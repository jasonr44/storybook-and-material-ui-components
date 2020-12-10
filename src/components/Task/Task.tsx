import React, { FC } from 'react';
import { TaskComponentProps, TaskState } from './types';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import StarIcon from '@material-ui/icons/Star';
import StartBorderOutlined from '@material-ui/icons/StarBorderOutlined';


const Task: FC<TaskComponentProps> = ({ task: { id, title, state }, onArchiveTask, onPinTask }) => {
    return (
        <div className={`list-item ${state}`}>
            <Checkbox
                defaultChecked={state === TaskState.TASK_ARCHIVED}
                disabled
                name="checked"
                onClick={() => onArchiveTask(id)}
                className="list-item-checkbox"
            />
            <div className="list-item-title">
                <TextField value={title} placeholder="Input title" fullWidth inputProps={{ style: { textOverflow: 'ellipsis' } }} />
            </div>
            {state !== TaskState.TASK_ARCHIVED && (<Checkbox
                defaultChecked={state === TaskState.TASK_PINNED}
                disabled
                name="checked"
                onClick={() => onPinTask(id)}
                className="list-item-pin"
                icon={<StartBorderOutlined fontSize="small" />}
                checkedIcon={<StarIcon fontSize="small" color="primary" />}
            />)}
        </div>
    );
};

export default Task;