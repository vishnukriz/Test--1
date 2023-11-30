describe("Testing_Scenarios", ()=>{

    it('verify the visible elements and print the length', ()=>{

        cy.visit(Cypress.env('amazonurl'));
        cy.get('#nav-xshop a:visible').should('have.length', 5)
    })



})
