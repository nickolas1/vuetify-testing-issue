import {fireEvent, render, within} from '@testing-library/vue';
import { describe, it} from 'vitest';
import SelectTest from './SelectTest.vue';
import {vuetify} from "@/setup-vuetify";

class ResizeObserverStub {
    observe() {
        // do nothing
    }
    unobserve() {
        // do nothing
    }
    disconnect() {
        // do nothing
    }
}

window.ResizeObserver = window.ResizeObserver || ResizeObserverStub;

describe('SelectTest.vue', () => {
    it('test can open select via fireEvent.click', async () => {
        const { getByLabelText, queryByRole, queryByText } = render(SelectTest, {
            global: {
                plugins: [vuetify],
            },
        });
        // click on select
        const select = getByLabelText(/Select Label/);
        await fireEvent.click(select);

        // find an option version 1
        const maybeOption = queryByText('maybe');

        // find an option version 2
        const optionsList = queryByRole('listbox')
        const maybeOptionInList = within(optionsList).queryByText('maybe')

        expect(maybeOption).not.toBeNull()
        expect(maybeOptionInList).not.toBeNull()
    });
});
