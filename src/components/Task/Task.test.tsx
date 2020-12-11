import { render } from '@testing-library/react';

describe('Task', () => {
    it.todo('Has the correct title');
    
    describe('Archived Task State', () => {
        it.todo('Has a checked box when task archived');
        it.todo('Has a unchecked box when task not archived');
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