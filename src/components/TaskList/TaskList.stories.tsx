// src/components/TaskList.stories.js

import React from 'react';

import TaskList from './TaskList';
import * as TaskStories from '../Task/Task.stories';
import { Story, Meta } from '@storybook/react/types-6-0';
import { TaskListComponentProps } from './types';
import { TaskProps } from '../Task/types';


export default {
  component: TaskList,
  title: 'TaskList',
  decorators: [(StoryComponent: Story) => <div style={{ padding: '3rem' }}><StoryComponent /></div>],
};

const Template: Story<TaskListComponentProps> = args => <TaskList {...args} />;

const { Default: { args: defaultArgs = {} } } = TaskStories;

const defaultTasks = [
    { ...defaultArgs.task, id: '1', title: 'Task 1' },
    { ...defaultArgs.task, id: '2', title: 'Task 2' },
    { ...defaultArgs.task, id: '3', title: 'Task 3' },
    { ...defaultArgs.task, id: '4', title: 'Task 4' },
    { ...defaultArgs.task, id: '5', title: 'Task 5' },
    { ...defaultArgs.task, id: '6', title: 'Task 6' },
] as TaskProps[];

export const Default = Template.bind({});
Default.args = {
  tasks: defaultTasks,
};

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
  tasks: [
    ...defaultTasks.slice(0, 5),
    { ...defaultArgs, id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
  ] as TaskProps[],
};

export const Loading = Template.bind({});
Loading.args = {
  tasks: [],
  loading: true,
};

export const Empty = Template.bind({});
Empty.args = {
  ...Loading.args,
  loading: false,
};