/// <reference types="cypress" />

describe('Municipality Submodule', () => {
  beforeEach(() => {
    
    cy.visit('http://apri-er194.redcoresolutions.com/apri/login')
  })

it('Creating Municipality', () => {
   
    cy.get('#login-form_email').type('superadmin@aboitiz.com')
    cy.get('#login-form_password').type('secret')
    cy.get('#create').click()
    cy.get(':nth-child(2) > .ant-menu-submenu-title > .ant-menu-title-content').click()
    cy.wait(5000)

  
    cy.get('#municipality').click()
    cy.get('#create').click()
    cy.wait(3000)

    cy.get('.ant-form-item-control-input-content > #municipality').type('municipality create')
    cy.get('#province_id').type("Laguna").type('{enter}')
    cy.get('#description').type('description create')
    cy.get('.ant-row-end > .CCjnl > #create > span').click()

    cy.wait(5000)
 
  })

  it('Delete Municipality', () => {
   
    cy.get('#login-form_email').type('superadmin@aboitiz.com')
    cy.get('#login-form_password').type('secret')
    cy.get('#create').click()
    cy.get(':nth-child(2) > .ant-menu-submenu-title > .ant-menu-title-content').click()
    cy.wait(5000)

  
    cy.get('#municipality').click()
    cy.get('#delete').click()
    cy.wait(3000)
    cy.get('.ant-btn-dangerous > span').click()

    cy.wait(5000)
 
  })




  })