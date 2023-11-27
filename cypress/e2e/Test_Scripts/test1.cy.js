describe("Testing_Scenarios", ()=>{

    // context('720p resolution', () => {
    //     beforeEach(() => {
    //       cy.viewport(1280, 720)
    //     })

    it("Test1_scenario_for_login", ()=>{

        cy.visit(Cypress.env('testportal')); //env variable
        cy.get('#username').as('idname') //alias
        cy.get('@idname').type(Cypress.env('user'));
        cy.get('#password').type(Cypress.env('pwd'));
        cy.get('#submit').click();
       
        




    })



})
//})