/// <reference types="cypress" />


/// create by darren


describe('AWP Year Submodule', () => {
  beforeEach(() => {
    
    cy.visit('http://apri-er194.redcoresolutions.com/apri/login')
  })

it('TC01 -[Create]Show the modal of AWP Year Created Successfully', () => {
   
    cy.get('#login-form_email').type('superadmin@aboitiz.com')
    cy.get('#login-form_password').type('secret')
    cy.get('#create').click()
    cy.get(':nth-child(2) > .ant-menu-submenu-title > .ant-menu-title-content').click()
    cy.wait(5000)

  
    cy.get('#awpyear').click()
    cy.get('.sc-hhOBVt > .sc-gswNZR > #create > span').click()
    cy.wait(3000)

    
    cy.get('#description').type('Decription Create')
    cy.get('.ant-picker-input').type(2021)
    
  
    
   
    cy.get('.ant-row-end > .cTWSvd > #create > span').click()
    cy.wait(3000)
    cy.get('.ant-notification-notice-description').invoke('text').then(someText =>{

      expect(someText).equal('AWP Year Created Successfully')
    })
      
    
  })






  it('TC02 -[Create] Show the modal of The year has already been taken.', () => {
   
    cy.get('#login-form_email').type('superadmin@aboitiz.com')
    cy.get('#login-form_password').type('secret')
    cy.get('#create').click()
    cy.get(':nth-child(2) > .ant-menu-submenu-title > .ant-menu-title-content').click()
    cy.wait(5000)

  
    cy.get('#awpyear').click()
    cy.get('.sc-hhOBVt > .sc-gswNZR > #create > span').click()
    cy.wait(3000)

    
    cy.get('#description').type('Decription Create')
    cy.get('.ant-picker-input').type(2021)
    
  
    
   
    cy.get('.ant-row-end > .cTWSvd > #create > span').click()

    cy.get('.ant-notification-notice-description').invoke('text').then(someText =>{

      expect(someText).equal('The year has already been taken.')
    })
      
    
  })




    


  })