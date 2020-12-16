import React from 'react';
import { render, screen } from '@testing-library/react';
import TaskList from './TaskList';
import randomWords from 'random-words';
import { TaskProps, TaskState } from '../Task/types';
import { isPinCheckbox, isChecked } from '../Task/util';
import { NO_TASKS_LABEL_ID, LOADING_TASKS_LABEL_ID } from './constants';

interface CreateTaskListArgs {
    state: TaskState,
    id: string
};

const TASK_ACTIONS = {
    onArchiveTask: () => null,
    onPinTask: () => null,
};

const createTaskList = (taskListArgs: CreateTaskListArgs[]): TaskProps[] => {
    return taskListArgs.map(({ state, id }: CreateTaskListArgs) => {
        if (
            !Object.values(TaskState).includes(state)
        ) {
            throw new Error(`${state} is not a valid state`);
        }

        return {
            id,
            title: randomWords({
                exactly: 1, wordsPerString: 2, formatter: (word, index) => {
                    return index === 0 ? word.slice(0, 1).toUpperCase().concat(word.slice(1)) : word;
                }
            })[0],
            state,
            updatedAt: new Date(2018, 0, 1, 9, 0),
        };
    });
};


describe('TaskList', () => {
    it('Displays the correct number of DEFAULT tasks.', () => {

        const tasks = createTaskList([{ state: TaskState.TASK_INBOX, id: '1' }]);
        const numberOfTasks = tasks.length;

        render(<TaskList
            loading={false}
            tasks={tasks}
            onArchiveTask={() => null}
            onPinTask={() => null}
        />);

        expect(screen.getAllByRole('textbox')).toHaveLength(numberOfTasks)
    });

    it('Displays the correct number of DEFAULT and PINNED tasks.', () => {
        const tasks = createTaskList([
            { state: TaskState.TASK_INBOX, id: '1' },
            { state: TaskState.TASK_PINNED, id: '2' }
        ]);

        render(<TaskList
            loading={false}
            tasks={tasks}
            onArchiveTask={() => null}
            onPinTask={() => null}
        />);

        expect(screen.getAllByRole('checkbox').filter(isPinCheckbox).filter(isChecked)).toHaveLength(1);
    });

    it('Displays PINNED tasks before DEFAULT tasks.', () => {
        const tasks = createTaskList([
            { state: TaskState.TASK_INBOX, id: '1' },
            { state: TaskState.TASK_PINNED, id: '2' },
            { state: TaskState.TASK_INBOX, id: '3' },
            { state: TaskState.TASK_PINNED, id: '4' },
        ]);

        render(<TaskList
            loading={false}
            tasks={tasks}
            onArchiveTask={() => null}
            onPinTask={() => null}
        />);
        
        expect(screen.getAllByRole('checkbox').filter(isPinCheckbox)[0]).toBeChecked();
        expect(screen.getAllByRole('checkbox').filter(isPinCheckbox)[1]).toBeChecked();
        expect(screen.getAllByRole('checkbox').filter(isPinCheckbox)[2]).not.toBeChecked();
        expect(screen.getAllByRole('checkbox').filter(isPinCheckbox)[3]).not.toBeChecked();

    });

    it('Displays NO TASKS component when there are no tasks', () => {
        render(<TaskList
            loading={false}
            tasks={[]}
            onArchiveTask={() => null}
            onPinTask={() => null}
        />);

        expect(screen.getByTestId(NO_TASKS_LABEL_ID)).toBeInTheDocument();
    });

    it('Displays LOADING component when tasks are loading.', () => {
        
        render(<TaskList
            loading
            tasks={[]}
            onArchiveTask={() => null}
            onPinTask={() => null}
        />);

        expect(screen.getByTestId(LOADING_TASKS_LABEL_ID)).toBeInTheDocument();
    });
});