///<reference types="cypress"/>
// http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html

describe('Selects, checkBox e radionButtons', () => {

    before('acessar url',() => {
        cy.visit('http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    })

    it('Validar select', () => {
        cy.get('#dropdowm-menu-1').should('be.visible').select('JAVA').should('have.value', 'java')
        // for preference uses the visible text 
        cy.get('#dropdowm-menu-2').should('be.visible').select('JUnit').should('have.value', 'junit')
        cy.get('#dropdowm-menu-3').should('be.visible').select('JavaScript').should('have.value', 'javascript')
    })
    it('Validar checkbox', () => {
        cy.get('#checkboxes').should('be.visible')
        cy.get('input[value="option-1"').check().should('be.checked')
        cy.get('input[value="option-3"').should('be.checked').uncheck().should('be.not.checked')
})

    it('RadioButton', () => {
        cy.get('input[value="blue"]').check().should('be.checked','blue')
        
    } )

    it('Select & disable', () => {
        // TO DO 
    })

})