import React from 'react';
import { render, screen } from '@testing-library/react';
import TaskList from './TaskList';
import randomWords from 'random-words';
import { TaskState } from '../Task/types';

interface TaskListOptions {
    all?: TaskState
};

const TASK_ACTIONS = {
    onArchiveTask: () => null,
    onPinTask: () => null,
};

const generateState = ({ all }: TaskListOptions = {}) => {
    if (all) {
        return all;
    }

    return TaskState.TASK_INBOX;
};

const createTaskList = (amount: number, options: TaskListOptions = {}) => {
    const taskArr = new Array(amount);

    return taskArr.map((_, idx) => {
        return {
            id: String(idx),
            title: randomWords({
                exactly: 1, wordsPerString: 2, formatter: (word, index) => {
                    return index === 0 ? word.slice(0, 1).toUpperCase().concat(word.slice(1)) : word;
                }
            })[0],
            state: generateState(options),
            updatedAt: new Date(2018, 0, 1, 9, 0),
        };
    });
};


describe('TaskList', () => {
    it('Displays the correct number of DEFAULT tasks.', () => {
        const numberOfTasks = 3;
        
        render(<TaskList
            loading={false}
            tasks={createTaskList(numberOfTasks, { all: TaskState.TASK_INBOX })}
            onArchiveTask={() => null}
            onPinTask={() => null}
        />);

        expect(screen.getAllByRole('textbox')).toHaveLength(numberOfTasks)
    });
    it.todo('Displays the correct number of DEFAULT and PINNED tasks.');
    it.todo('Displays PINNED tasks before DEFAULT tasks.');
    it.todo('Displays NO TASKS component when there are no tasks');
    it.todo('Displays LOADING component when tasks are loading.');
});