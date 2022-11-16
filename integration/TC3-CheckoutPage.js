describe('Test user is able to checkout', () => {
    it('NopCommerce Test',function(){
        cy.visit('https://demo.nopcommerce.com/')
        cy.get('#small-searchterms').type('Nokia{enter}')
        cy.get('.product-title > a').should('contain','Nokia Lumia 1020')
        cy.xpath("//button[contains(text(),'Add to cart')]").click()
        cy.scrollTo(1500, 0) 
        cy.xpath('//span[@class="cart-label"]').click()
        cy.get('.product-name').should('contain','Nokia Lumia 1020')
        cy.get('#termsofservice').click()
        cy.xpath('//button[@name="checkout"]').click()
        cy.get('.register-button').click();
    })
    })

