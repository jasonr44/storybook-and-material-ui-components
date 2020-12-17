import { ARCHIVE_CHECKBOX, PIN_CHECKBOX } from '../constants';
import { NamedCheckBox } from '../types';
import { isArchiveCheckbox, isPinCheckbox, isChecked } from './index';

describe('Task Utility Functions', () => {
    it('isArchiveCheckbox returns element when name matches ARCHIVE_CHECKBOX', () => {
        expect(isArchiveCheckbox({ name: ARCHIVE_CHECKBOX } as NamedCheckBox)).toBeTruthy();
        expect(isArchiveCheckbox({ name: '' } as NamedCheckBox)).toBeUndefined();
    });

    it('isPinCheckbox returns element when name matches PIN_CHECKBOX', () => {
        expect(isPinCheckbox({ name: PIN_CHECKBOX } as NamedCheckBox)).toBeTruthy();
        expect(isPinCheckbox({ name: '' } as NamedCheckBox)).toBeUndefined();
    });

    it('isChecked returns element when checked property is true', () => {
        expect(isChecked({ checked: true } as NamedCheckBox)).toBeTruthy();
        expect(isChecked({ } as NamedCheckBox)).toBeUndefined();
    });
});