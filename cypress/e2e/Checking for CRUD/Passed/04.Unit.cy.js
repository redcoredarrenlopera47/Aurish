/// <reference types="cypress" />



describe('Municipality Submodule', () => {
  beforeEach(() => {
    
    cy.visit('http://apri-er194.redcoresolutions.com/apri/login')
  })

it('TC01 -[Create]Show the modal of Municipality Created Successfully', () => {
 

  cy.get('#login-form_email').type('superadmin@aboitiz.com')
  cy.get('#login-form_password').type('secret')
  cy.get('#create').click()
  cy.get(':nth-child(2) > .ant-menu-submenu-title > .ant-menu-title-content').click()
  cy.wait(5000)


  cy.get('.ant-menu-title-content > #unit').click()
  cy.get('.sc-iTFTee > .sc-gswNZR > #create > span').click()
  cy.get('.ant-form-item-control-input-content > #unit').type('Barangay Bagumbayan')
  cy.get('.ant-select-selection-search > #province').type("Albay").type('{enter}')
  cy.get('.ant-select-selection-search > #municipality').type("Municipality of Tiwi").type('{enter}')
  cy.get('#description').type('description create')
  cy.get('.ant-row-end > .cTWSvd > #create > span').click()

  cy.get('.ant-notification-notice-description').invoke('text').then(someText =>{

    expect(someText).equal('Unit Created Successfully')
  })
    
  })


  it('TC02 -[Create]Same unit and provice but different Municipality Show the modal of Unit Created Successfully', () => {
 

    cy.get('#login-form_email').type('superadmin@aboitiz.com')
    cy.get('#login-form_password').type('secret')
    cy.get('#create').click()
    cy.get(':nth-child(2) > .ant-menu-submenu-title > .ant-menu-title-content').click()
    cy.wait(5000)
  
  
    cy.get('.ant-menu-title-content > #unit').click()
    cy.get('.sc-iTFTee > .sc-gswNZR > #create > span').click()
    cy.get('.ant-form-item-control-input-content > #unit').type('Barangay Bagumbayan')
    cy.get('.ant-select-selection-search > #province').type("Albay").type('{enter}')
    cy.get('.ant-select-selection-search > #municipality').type("Bicol").type('{enter}')
    cy.get('#description').type('description create')
    cy.get('.ant-row-end > .cTWSvd > #create > span').click()
  
    cy.get('.ant-notification-notice-description').invoke('text').then(someText =>{
  
      expect(someText).equal('Unit Created Successfully')
    })
      
    })
   })