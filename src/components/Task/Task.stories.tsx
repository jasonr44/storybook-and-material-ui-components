import React from 'react';
import { TaskComponentProps, TaskState } from './types';
import Task from './Task';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
    component: Task,
    title: 'Task'
} as Meta;

const Template: Story<TaskComponentProps> = args => <Task {...args} />;

const defaultTask = {
    id: '1',
    title: 'Test Task',
    updatedAt: new Date(2018, 0, 1, 9, 0),
};

export const Default = Template.bind({});
Default.args = {
    task: {
        ...defaultTask,
        state: TaskState.TASK_INBOX,
      },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...defaultTask,
    state: TaskState.TASK_PINNED,
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...defaultTask,
    state: TaskState.TASK_ARCHIVED,
  },
};