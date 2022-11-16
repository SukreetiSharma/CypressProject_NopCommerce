/// <reference types="cypress-xpath" />
describe('Test user is able to Search Product', () => {
it('NopCommerce Test',function(){
    cy.visit('https://demo.nopcommerce.com/')
    cy.get('#small-searchterms').type('Nokia{enter}')
})
})