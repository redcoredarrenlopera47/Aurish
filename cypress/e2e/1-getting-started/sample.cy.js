/// <reference types="cypress" />


describe('Province Submodule', () => {
  beforeEach(() => {
    
    cy.visit('http://apri-er194.redcoresolutions.com/apri/login')
  })



  it('TC03 -[Update] Show the modal of The name has already been taken', () => {
   
    cy.get('#login-form_email').type('superadmin@aboitiz.com')
    cy.get('#login-form_password').type('secret')
    cy.get('#create').click()
    cy.get(':nth-child(2) > .ant-menu-submenu-title > .ant-menu-title-content').click()
    cy.wait(5000)

  
    cy.get('#awpyear').click()
    cy.get('#edit').click()
    cy.wait(3000)

    cy.get('#description').clear()
    cy.get('#description').type('Decription Update')
    cy.wait(3000)
    cy.get('.ant-picker-input').type(2020)
    
  
    
   
    cy.get('.ant-row-end > .ccGznZ > #edit > span').click()

    cy.get('.ant-notification-notice-description').invoke('text').then(someText =>{

      expect(someText).equal('The year has already been taken.')
    })
      
    
  })



  })