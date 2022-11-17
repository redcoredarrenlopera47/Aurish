/// <reference types="cypress" />


describe('Project Status Submodule', () => {
  beforeEach(() => {
    
    cy.visit('http://apri-er194.redcoresolutions.com/apri/login')
  })






  it('TC01 -[Create]Show the modal of Project Status Created Successfully', () => {
   
    cy.get('#login-form_email').type('superadmin@aboitiz.com')
        cy.get('#login-form_password').type('secret')
        cy.get('#create').click()
        cy.get(':nth-child(2) > .ant-menu-submenu-title > .ant-menu-title-content').click()
        cy.wait(5000)
    
      
        cy.get('#projectstatus').click()
        cy.get('.sc-eeMvmM > .sc-gswNZR > #create > span').click()
        cy.wait(3000)
        cy.get('#project status').type("project status create")
        cy.get('#description').type("description Create")
        cy.wait(3000)
        cy.get('.ant-row-end > .cTWSvd > #create > span').click()
        cy.wait(3000)
       
        cy.get('.ant-notification-notice-description').invoke('text').then(someText =>{

        expect(someText).equal('Project Status Created Successfully')
      })
        
      
       
    })
    


 

})