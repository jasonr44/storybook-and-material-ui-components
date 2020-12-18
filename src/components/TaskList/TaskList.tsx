import React, { FC } from 'react';
import Task from '../Task';
import { TaskListComponentProps } from './types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import { TaskState } from '../Task/types';
import { NO_TASKS_LABEL_ID, LOADING_TASKS_LABEL_ID } from './constants';

const statePriorityMap = {
    [TaskState.TASK_PINNED]: 1,
    [TaskState.TASK_INBOX]: 2,
    [TaskState.TASK_ARCHIVED]: 3,
};

const TaskList: FC<TaskListComponentProps> = ({ loading, tasks, onArchiveTask, onPinTask }) => {
    if (loading) {
        // TODO: Add loading component/view;
        return <div>
            <label data-testid={LOADING_TASKS_LABEL_ID}>
                NO TASKS AVAILABLE COMPONENT
            </label>
        </div>
    }

    if (!tasks.length) {
        // TODO: Add no tasks component/view;
        return <div>
            <label data-testid={NO_TASKS_LABEL_ID}>
                NO TASKS AVAILABLE COMPONENT
            </label>
        </div>
    }

    return (
        <div className='tasklist-wrapper'>
            <List className='tasklist'>
                {tasks.sort(({ state: stateA }, { state: stateB }) => {
                    if (statePriorityMap[stateA] < statePriorityMap[stateB]) {
                        return -1;
                    }

                    if (statePriorityMap[stateA] > statePriorityMap[stateB]) {
                        return 1;
                    }

                    return 0;
                }).map(task => {
                    return (
                        <ListItem key={task.id}>
                            <Task task={task} onArchiveTask={onArchiveTask} onPinTask={onPinTask} />
                            <Divider />
                        </ListItem>
                    )
                })};
            </List>
        </div>
    )
};

export default TaskList;