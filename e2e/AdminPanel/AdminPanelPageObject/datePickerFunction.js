/// <reference types="cypress" />

function  rangeDatePicker(day) {
    let date = new Date();
    date.setDate(date.getDate() + day)
    let futureDate = date.getDate()
    let futureMonth = date.toLocaleDateString('en-US', { month: 'short' })
    let dateAssert = futureMonth + ' ' + futureDate + ', ' + date.getFullYear();
    cy.get('nb-calendar-navigation').invoke('attr', 'ng-reflect-date').then(dateAttribute => {
        if (!dateAttribute.includes(futureMonth)) {
            cy.get('[data-name="chevron-right"]')
        } else {
            cy.get('.day-cell').not('.bounding-month').contains(futureDate).click()
        }
    })
    return dateAssert
}

class DynamicDatePicker {


    DatePicker() {
        const currentDate = new Date();
        const options = { year: 'numeric', month: 'short', day: 'numeric' };

        // Get the date for tomorrow
        const tomorrowDate = new Date(currentDate);
        tomorrowDate.setDate(currentDate.getDate() + 1);
        const formattedTomorrowDate = tomorrowDate.toLocaleDateString('en-US', options);

        // Get the date for next week
        const nextWeekDate = new Date(currentDate);
        nextWeekDate.setDate(currentDate.getDate() + 7);
        const formattedNextWeekDate = nextWeekDate.toLocaleDateString('en-US', options);

        // Get the date for next month
        const nextMonthDate = new Date(currentDate);
        nextMonthDate.setMonth(currentDate.getMonth() + 1);
        const formattedNextMonthDate = nextMonthDate.toLocaleDateString('en-US', options);

        return {
            tomorrow: formattedTomorrowDate,
            nextWeek: formattedNextWeekDate,
            nextMonth: formattedNextMonthDate
        };
    }

    SelectDatePickerWithrange(firstDate,secondDay) {
        cy.contains('nb-card','Datepicker With Range').find('input').then(input=>{
            cy.wrap(input).click();
            let dateAssertFirst = rangeDatePicker(firstDate);
            let dateAssertSecond = rangeDatePicker(secondDay);
            const finalDate= dateAssertFirst+' - '+dateAssertSecond
            cy.wrap(input).invoke('prop','value').should('contain',finalDate)
            cy.wrap(input).should('have.value',finalDate)
        })
    }


}

export default DynamicDatePicker;