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

  
    cy.get('#municipality').click()
    cy.get('.sc-jcMfQk > .sc-gswNZR > #create > span').click()
    cy.wait(3000)

    cy.get('.ant-form-item-control-input-content > #municipality').type('municipality create')
    cy.get('#province_id').type("Laguna").type('{enter}')
    cy.wait(3000)
    cy.get('#description').type('description create')
    cy.get('.ant-row-end > .cTWSvd > #create > span').click()

    cy.get('.ant-notification-notice-description').invoke('text').then(someText =>{

      expect(someText).equal('Municipality Created Successfully')
    })
      
    
  })




  
it('TC02 -[Create] Show the modal of Municipality name under the same province already exists..', () => {
   
  cy.get('#login-form_email').type('superadmin@aboitiz.com')
  cy.get('#login-form_password').type('secret')
  cy.get('#create').click()
  cy.get(':nth-child(2) > .ant-menu-submenu-title > .ant-menu-title-content').click()
  cy.wait(5000)


  cy.get('#municipality').click()
  cy.get('.sc-jcMfQk > .sc-gswNZR > #create > span').click()
  cy.wait(3000)

  cy.get('.ant-form-item-control-input-content > #municipality').type('municipality create')
  cy.get('#province_id').type("Laguna").type('{enter}')
  cy.wait(3000)
  cy.get('#description').type('description create')
  cy.get('.ant-row-end > .cTWSvd > #create > span').click()

  cy.get('.ant-notification-notice-description').invoke('text').then(someText =>{

    expect(someText).equal('Municipality name under the same province already exists..')
  })
})






  })