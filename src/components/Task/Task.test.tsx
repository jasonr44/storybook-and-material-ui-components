import React from 'react';
import Task, { TaskComponentProps, TaskState } from './index';
import { render, screen } from '@testing-library/react';
import userEvent, { TargetElement } from '@testing-library/user-event';
import { CHECKBOX_ROLE } from './constants';
import { isArchiveCheckbox, isPinCheckbox } from './util';

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

const INBOX_TASK_PROPS = createTaskProps(TaskState.TASK_INBOX);

const ARCHIVE_TASK_PROPS = createTaskProps(TaskState.TASK_ARCHIVED);

const PINNED_TASK_PROPS = createTaskProps(TaskState.TASK_PINNED);

describe('Task Component', () => {
    it('Has the correct title', () => {
        const { task: { title } } = INBOX_TASK_PROPS;

        render(<Task {...INBOX_TASK_PROPS} />);

        expect(screen.getByRole('textbox')).toHaveValue(title);
    });

    describe('Archived Task State', () => {
        it('Has a checked box when TASK_ARCHIVED state', () => {
            render(<Task {...ARCHIVE_TASK_PROPS} />);
            
            expect(
                screen.getAllByRole(CHECKBOX_ROLE).find(isArchiveCheckbox)
                ).toBeChecked();
        });

        it('Has a unchecked box when NOT TASK_ARCHIVED state', () => {
            render(<Task {...INBOX_TASK_PROPS} />);
            expect(
                screen.getAllByRole(CHECKBOX_ROLE).find(isArchiveCheckbox)
                ).not.toBeChecked();
        });

        it('Has no star icon when task archived', () => {
            render(<Task {...ARCHIVE_TASK_PROPS} />);

            expect(
                screen.getAllByRole(CHECKBOX_ROLE).find(isPinCheckbox)
            ).toBeUndefined();
        });
    });

    describe('Pinned Task State', () => {
        it('Has a checked star icon when task pinned', () => {
            render(<Task {...PINNED_TASK_PROPS} />);

            expect(screen.getAllByRole(CHECKBOX_ROLE).find(isPinCheckbox)).toBeChecked();
        });

        it('Has a empty star icon when (non-archived) task not pinned', () => {
            render(<Task {...INBOX_TASK_PROPS} />);

            expect(screen.getAllByRole(CHECKBOX_ROLE).find((isPinCheckbox))).not.toBeChecked();
        });
    });

    describe('Task Actions', () => {
        it('Calls correct action onArchive', () => {
            const onArchiveTask = jest.fn();
            
            render(<Task {...{
                ...INBOX_TASK_PROPS,
                onArchiveTask
            }} />);
            
            userEvent.click(screen.getAllByRole(CHECKBOX_ROLE).find(isArchiveCheckbox) as TargetElement)
            
            expect(onArchiveTask).toHaveBeenCalledTimes(1);
        });
        
        it('Calls correct action onPin', () => {
            const onPinTask = jest.fn();

            render(<Task {...{
                ...INBOX_TASK_PROPS,
                onPinTask
            }} />);

            userEvent.click(screen.getAllByRole(CHECKBOX_ROLE).find(isPinCheckbox) as TargetElement)

            expect(onPinTask).toHaveBeenCalledTimes(1);
        });
    });
});