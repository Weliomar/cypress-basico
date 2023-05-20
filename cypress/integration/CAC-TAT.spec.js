// CAC-TAT.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test


/// <reference types="Cypress" />

// O bloco `describe` define a suíte de testes, e o bloco `it`, define um caso de teste.
describe('Central de atendimento ao Cliente TAT', function(){
    
    it('verifica o titulo da aplicação', function () {
        cy.visit('./src/index.html')
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

})

