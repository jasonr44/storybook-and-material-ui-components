import React from 'react';
import Task, { TaskComponentProps, TaskState } from './index';
import { render, screen } from '@testing-library/react';
import { ARCHIVE_CHECKBOX, PIN_CHECKBOX } from './constants';

const STANDARD_TASK_COMPONENT_TASK_PROPS = {
    id: '1',
    title: 'A Simple Title',
    updatedAt: new Date(2018, 0, 1, 9, 0),
};

const TASK_ACTIONS = {
    onArchiveTask: () => null,
    onPinTask: () => null,
};

const createTaskProps = (state: TaskState) : TaskComponentProps => ({
    task: {
        ...STANDARD_TASK_COMPONENT_TASK_PROPS,
        state,
    },
    ...TASK_ACTIONS
});

const isArchiveCheckbox = ({ name }: HTMLInputElement) => name === ARCHIVE_CHECKBOX;

const INBOX_TASK_PROPS = createTaskProps(TaskState.TASK_INBOX);

const ARCHIVE_TASK_PROPS = createTaskProps(TaskState.TASK_ARCHIVED);

const PINNED_TASK_PROPS = createTaskProps(TaskState.TASK_PINNED);

describe('Task', () => {
    it('Has the correct title', () => {
        const { task: { title } } = INBOX_TASK_PROPS;

        render(<Task {...INBOX_TASK_PROPS} />);

        expect(screen.getByRole('textbox')).toHaveValue(title);
    });

    describe('Archived Task State', () => {
        it('Has a checked box when TASK_ARCHIVED state', () => {
            render(<Task {...ARCHIVE_TASK_PROPS} />);
            
            expect(
                screen.getAllByRole('checkbox').find(isArchiveCheckbox)
                ).toBeChecked();
        });

        it('Has a unchecked box when NOT TASK_ARCHIVED state', () => {
            render(<Task {...INBOX_TASK_PROPS} />);
            expect(
                screen.getAllByRole('checkbox').find(isArchiveCheckbox)
                ).not.toBeChecked();
        });

        it.todo('Has no star icon when task archived');
    });

    describe('Pinned Task State', () => {
        it.todo('Has a checked star icon when task pinned');
        it.todo('Has a empty star icon when task not pinned');
    });

    describe('Task Actions', () => {
        it.todo('Calls correct action onArchive');
        it.todo('Calls correct action onPin');
    });
});