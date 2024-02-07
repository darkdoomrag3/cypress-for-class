/// <reference types="cypress" />

beforeEach(() => {

    cy.viewport(1280, 720)
})

describe('Validate Form', () => {

    it('validate Email', () => {
        cy.visit('http://localhost:4200/');
        cy.contains('Forms').click();
        cy.contains('Form Layouts').click();
        cy.get("input[type='Email']").first().type("emad@gmail.com");

    })

    it('Tehory behind cypress for interact with DOM and element for students', () => {
        cy.visit('http://localhost:4200/');
        cy.contains('Forms').click();
        cy.contains('Form Layouts').click();

        //by Tag name    
        cy.get('input');

        //by ID
        cy.get('#inputEmail');
        //by Class Value
        cy.get('.input-full-width');
        //by attribute name 
        cy.get('[fullwidth]');
        //by attribute and value
        cy.get('[placeholder="Email"]');
        //by entire class
        cy.get('[class="input-full-width size-medium shape-rectangle"]');
        //by two attribute
        cy.get('[placeholder="Email"][fullwidth]');
        //by tag,attribue, id and class

        cy.get('input[placeholder="Email"]#inputEmail.input-full-width');
        //by data-testid
        cy.get('[data-cy="inputEmail1"]');

        //Theory behid cypress
        //get() - find element on the page by locator globally
        //find()- find child elements by locator
        //contains()- find HTML text and by text and locator 

        cy.contains('[status="primary"]', 'Sign in');
        cy.contains('nb-card', 'Horizontal form').contains('Sign in').get("[status='warning']");
        cy.contains('nb-card', 'Horizontal form').find('button');
        //cypress chains and DOM
        cy.get('#inputEmail3').parents('form').find('nb-checkbox').click().should('be.checked');

    })

    it('Saving subject of the command', () => {
        cy.visit('http://localhost:4200/');
        cy.contains('Forms').click();
        cy.contains('Form Layouts').click();
        cy.get('nb-card').find('[for="inputEmail1"]').should('contain', 'Email');

        // this is not correct since cypress is asynchronous and it has his own method to assign variable 
        // const usingTheGridForm = cy.contains('nb-card','Using the Grid');
        // usingTheGridForm.find('[for="inputPassword2"]').should('have.text','Password');

        // 1 using cypress Alies( its global which means that you can use it in all part of project)
        cy.contains('nb-card', 'Using the Grid').as('usingTheGridForm')
        cy.get('@usingTheGridForm').find('[for="inputPassword2"]').should('have.text', 'Password');

        // 2 then() method(singel method and its not global)
        cy.contains('nb-card', 'Using the Grid').then((usingTheGridForm) => {
            cy.wrap(usingTheGridForm).find('[for="inputEmail1"]').should('contain', 'Email');
            cy.wrap(usingTheGridForm).find('[for="inputPassword2"]').should('have.text', 'Password');
        })

    })

    it('Extract Text', () => {
        cy.visit('http://localhost:4200/');
        cy.contains('Forms').click();
        cy.contains('Form Layouts').click();

        //1 
        cy.get('[for="exampleInputEmail1"]').should('contain', 'Email address')
        //2
        cy.contains('nb-card', 'Basic form').get('[for="exampleInputEmail1"]').then(($value) => {
            const getText = $value.text()
            cy.log("Print Value - Using Variables ====== ", getText)
            expect(getText).to.equal('Email address')
        })

        //3
        cy.get('[for="exampleInputEmail1"]').invoke('text').then((text) => {
            expect(text).to.equal('Email address')
        })
        //4 
        cy.get('[for="exampleInputEmail1"]').invoke('text').as('LabeText').should('contain', 'Email address')
        cy.get('[for="exampleInputEmail1"]').invoke('attr', 'class').then(classValue => {
            expect(classValue).to.equal('label')
        })

        //5
        cy.get('#exampleInputEmail1').type('test@test.com')
        cy.get('#exampleInputEmail1')
            .invoke('val').then(inputText => {
                expect(inputText).to.equal('test@test.com')
            });
        cy.get('#exampleInputEmail1').invoke('prop', 'value').should('contain', 'test@test.com').then(property => {
            expect(property).to.equal('test@test.com')
        })

    })
    it('Radio button', () => {
        cy.visit('http://localhost:4200/');
        cy.contains('Forms').click();
        cy.contains('Form Layouts').click();
        cy.contains('nb-card', 'Using the Grid').find('[type="radio"]').then(radioButton => {
            cy.wrap(radioButton).eq(1).click({ force: true })
            cy.wrap(radioButton).eq(0).should('not.be.checked')
        })
    })

    it('Check Box', () => {
        cy.visit('http://localhost:4200/');
        cy.contains('Modal & Overlays').click();
        cy.contains('Toastr').click();
        cy.get('[type="checkbox"]').check({ force: true })
    })

    it('Date Picker automate', () => {


        function DatePicker() {
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

        cy.visit('http://localhost:4200/');
        cy.contains('Forms').click();
        cy.contains('Datepicker').click();
        const formattedDates = DatePicker();
        cy.contains('nb-card', 'Common Datepicker').get('[placeholder="Form Picker"]').type(formattedDates.nextMonth).click();


        // cy.get(`[ng-reflect-selected-value="${formattedDates.nextWeek}"]`).click({force: true})
        cy.get('[class="day-cell selected ng-star-inserted"]').invoke('text').then(dateValue => {
            cy.wrap(dateValue)

            cy.get('.selected').click()
        })

    })

    it('Dropdown', () => {

        cy.visit('http://localhost:4200/');

        cy.get('nav nb-select').click();
        //1
        cy.get('[ng-reflect-klass="select-button"]').each(() => {
            const colors = ['Dark', 'Cosmic', 'Light', 'Corporate'];

            for (let i = 0; i < colors.length; i++) {

                cy.contains(colors[i]).click();
                cy.get('.select-button').click();
            }
        })

        //2
        cy.get('nav nb-select').then(dropdown => {
            cy.wrap(dropdown).click();
            cy.get('[ng-reflect-klass="select-button"]').each((ListItem, index) => {
                const itemText = ListItem.text().trim();
                cy.wrap(ListItem).click();
                cy.wrap(dropdown).should('contain', itemText);
                if (index < 3) {
                    cy.wrap(dropdown).click();
                }

            })
        })

    })

    it('Smart Tabel', () => {

        cy.visit('http://localhost:4200/');
        cy.contains('Tables & Data').click();
        cy.contains('Smart Table').click();

        //Get the row by text
        cy.get('tbody').contains('tr', 'Larry').then((tabelRow) => {
            cy.wrap(tabelRow).find('.nb-edit').click();
            cy.wrap(tabelRow).find('[placeholder="Age"]').clear().type('33')
            cy.wrap(tabelRow).find('.nb-checkmark').click();
            cy.wrap(tabelRow).find('td').eq(6).should('contain', '33')

        })

        //Get the row by index
        cy.get('thead').find('.nb-plus').click();
        cy.get('thead').find('tr').eq(2).then((tabelRow) => {
            cy.wrap(tabelRow).find('[placeholder="First Name"]').type('Emad')
            cy.wrap(tabelRow).find('[placeholder="Last Name"]').type('Deym')
            cy.wrap(tabelRow).find('[placeholder="Username"]').type('Emad')
            cy.wrap(tabelRow).find('[placeholder="E-mail"]').type('Emad@gmail.com')
            cy.wrap(tabelRow).find('[placeholder="Age"]').type('33')
            cy.wrap(tabelRow).find('.nb-checkmark').click();
            cy.wrap(tabelRow).get('tbody > :nth-child(1) > :nth-child(7)').should('contain', '33')
            cy.get('tbody tr').first().find('td').then(tableColumn => {
                cy.wrap(tableColumn).eq(2).should('contain', 'Emad')
                cy.wrap(tableColumn).eq(3).should('contain', 'Deym')
            })


        })

        //assertion on age
        const ages = ['20', '30', '40', '50', '60', '70', '200']



        for (let i = 0; i < ages.length; i++) {
            cy.get('thead [placeholder="Age"]').clear().type(ages[i])
            cy.wait(500)
        }

        cy.wait(500)
        cy.get('thead [placeholder="Age"]').clear().type('20')
        cy.get('tbody tr').each((row) => {
            cy.wrap(row).find('td:last').then(td => {
                const age = td.textContent
                cy.log(age)
                cy.wrap(td).should('contain', '20')

            })
        })

        //another way of doing this 
        cy.get('tbody tr').each(tableRow => {
            cy.wrap(tableRow).find('td').eq(6).should('contain', '20')
        })

    })

    it('Loop through table', () => {

        cy.visit('http://localhost:4200/');
        cy.contains('Tables & Data').click();
        cy.contains('Smart Table').click();
        //assertion on age
        const ages = [20, 30, 40, 200]

        for (let i = 0; i < ages.length; i++) {
            cy.get('thead [placeholder="Age"]').clear().type(ages[i])
            cy.wait(500)

        }

        //another way of doing loop
        cy.wrap(ages).each(age => {
            cy.get('thead [placeholder="Age"]').clear().type(age)
            cy.wait(500)
            cy.get('tbody tr').each(tabelRow => {
                if (age == 200) {
                    cy.wrap(tabelRow).should('contain', 'No data found')
                } else {
                    cy.wrap(tabelRow).find('td').eq(6).should('contain', age)
                }

            })
        })

    })

    it.only('Tooltip and Alert', () => {

        cy.visit('http://localhost:4200/');
        cy.contains('Modal & Overlays').click();
        cy.contains('Tooltip').click();
        cy.contains('nb-card', 'Colored Tooltips').contains('Default').click();
        cy.get('.top').should('contain', 'This is a tooltip')
        cy.contains('Tables & Data').click();
        cy.contains('Smart Table').click();
        // cy.get('tbody tr').eq(0).find('.nb-trash').click();
        // //first method(not suggested)
        // cy.on('window:alert', (alertText) => {
        //     //assertions
        //     expect(alertText).to.contains('Are you sure you want to delete?');
        // })

        //2 method
        const stub = cy.stub()

        cy.on('window:confirm', stub)

        cy.get('tbody tr').eq(0).find('.nb-trash')
            .click()
            .then(() => {
                expect(stub.getCall(0)).to.be.calledWith('Are you sure you want to delete?')

            })

        //cancel confrimation
        // const stub = cy.stub()

        // cy.get('tbody tr').eq(0).find('.nb-trash')
        //     .click()
           
        //     cy.on('window:confirm', ()=>false)
    
    })



})