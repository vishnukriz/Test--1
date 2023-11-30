describe("Testing_Scenarios", ()=>{

    it('verify the user uplaods the files', ()=>{

        cy.visit(Cypress.env('uploadpageurl'))
        cy.wait(2000)
        cy.get('input[type=file]').selectFile('example.json')
        
    })



})
