import React, { FC } from 'react';
import Task from '../Task';
import { TaskListComponentProps } from './types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';

const TaskList: FC<TaskListComponentProps> = ({ loading, tasks, onArchiveTask, onPinTask }) => {
    if (loading) {
        // TODO: Add loading component/view;
        return null;
    }

    return (
        <div>
            <List>
                {tasks.map(task => {
                    return (
                        <ListItem>
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