import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from "../../../App";

describe('Shared | Integration', () => {

    it('Home page should be displayed and button with state should work', async () => {
        // GIVEN App is mounted
        render(<App/>)
        const button = screen.getByRole('button', { name: /count is 0/i })
        
        // WHEN Button is clicked
        await userEvent.click(button)
        
        // THEN Button label should displayed with count state incremented by 1 
        const newButton = screen.getByRole('button', { name: /count is 1/i })
        expect(newButton).toBeInTheDocument()
        screen.debug()
    })

})
