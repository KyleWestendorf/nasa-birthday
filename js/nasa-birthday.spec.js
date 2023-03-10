/**
 * @jest-environment jsdom
 */

// describe('a thing', () => {
//     it('does a thing', () => {
//         expect(true).toEqual(true);
//     });
// })
import { populateDays } from './utilities';

describe('populateDays', () => {
    it('adds the hidden class to day30 if the month is February', () => {
        // arrange
        const month = "February";
        const dayThirtyListElement = document.createElement("li");
        const dayThirtyOneListElement = document.createElement("li");
        const daysInMonths = [];
        // act 
        populateDays(month, dayThirtyListElement, dayThirtyOneListElement, daysInMonths);
        // assert 
        expect(dayThirtyListElement.classList).toContain("hidden");
    });
})


// https://stackoverflow.com/questions/45918386/how-to-test-classlist-add-remove-using-jest 