/// <reference types="cypress" />


describe('Province Submodule', () => {
  beforeEach(() => {
    
    cy.visit('http://apri-er194.redcoresolutions.com/apri/login')
  })






  it('TC01 -[Create]Show the modal of Province Created Successfully', () => {
   
    cy.get('#login-form_email').type('superadmin@aboitiz.com')
        cy.get('#login-form_password').type('secret')
        cy.get('#create').click()
        cy.get(':nth-child(2) > .ant-menu-submenu-title > .ant-menu-title-content').click()
        cy.wait(5000)
    
      
        cy.get('#province').click()
        cy.get('#create').click()
        cy.wait(3000)
        cy.get('.ant-form-item-control-input-content > #province').type("province Create")
        cy.get('#description').type("description Create")
        cy.wait(3000)
        cy.get('.ant-row-end > .cTWSvd > #create').click()
        cy.wait(3000)
       
        cy.get('.ant-notification-notice-description').invoke('text').then(someText =>{

        expect(someText).equal('Province Created Successfully')
      })
        
      
       
    })
    

  it('TC02 -[Create] Show the modal of The name has already been taken.', () => {
   
    cy.get('#login-form_email').type('superadmin@aboitiz.com')
        cy.get('#login-form_password').type('secret')
        cy.get('#create').click()
        cy.get(':nth-child(2) > .ant-menu-submenu-title > .ant-menu-title-content').click()
        cy.wait(5000)
    
      
        cy.get('#province').click()
        cy.get('#create').click()
        cy.wait(3000)
        cy.get('.ant-form-item-control-input-content > #province').type("province Create")
        cy.get('#description').type("description Create")
        cy.wait(3000)
        cy.get('.ant-row-end > .cTWSvd > #create').click()
        cy.wait(3000)
       
        cy.get('.ant-notification-notice-description').invoke('text').then(someText =>{

        expect(someText).equal('The name has already been taken.')
      })
        
      
       
    })


     

  it('TC03 -[Update] Show the modal of The name has already been taken', () => {
   
    cy.get('#login-form_email').type('superadmin@aboitiz.com')
    cy.get('#login-form_password').type('secret')
    cy.get('#create').click()
    cy.get(':nth-child(2) > .ant-menu-submenu-title > .ant-menu-title-content').click()
    cy.wait(5000)

  
    cy.get('#province').click()
   
    cy.get('#edit').click()
    cy.wait(3000)
    cy.get('.ant-form-item-control-input-content > #province').clear()
    cy.wait(1000)
    cy.get('.ant-form-item-control-input-content > #province').type("Dasmarinas")
    cy.get('#description').clear()
    cy.wait(1000)
    cy.get('#description').clear().type("Province of Dasmarinas, Cavite")
    cy.wait(3000)
    cy.get('.ant-row-end > .ccGznZ > #edit > span').click()
    cy.wait(3000)

    cy.get('.ant-notification-notice-description').invoke('text').then(someText =>{

      expect(someText).equal('The name has already been taken.')
    })
  })


  it('TC04 -[Update] Show the modal of Province Updated Successfully', () => {
   
    cy.get('#login-form_email').type('superadmin@aboitiz.com')
    cy.get('#login-form_password').type('secret')
    cy.get('#create').click()
    cy.get(':nth-child(2) > .ant-menu-submenu-title > .ant-menu-title-content').click()
    cy.wait(5000)

  
    cy.get('#province').click()
    cy.get('#edit').click()
    cy.wait(3000)
    cy.get('.ant-form-item-control-input-content > #province').clear()
    cy.wait(1000)
    cy.get('.ant-form-item-control-input-content > #province').type("province Update")
    cy.get('#description').clear()
    cy.wait(1000)
    cy.get('#description').clear().type("description Update")
    cy.wait(3000)
    cy.get('.ant-row-end > .ccGznZ > #edit > span').click()
    cy.wait(3000)

    cy.get('.ant-notification-notice-description').invoke('text').then(someText =>{

      expect(someText).equal('Province Updated Successfully')
    })
  })
     
      
  it('TC05 -[Update]With no changes show the modal of Province Updated Successfully', () => {
   
    cy.get('#login-form_email').type('superadmin@aboitiz.com')
    cy.get('#login-form_password').type('secret')
    cy.get('#create').click()
    cy.get(':nth-child(2) > .ant-menu-submenu-title > .ant-menu-title-content').click()
    cy.wait(5000)

  
    cy.get('#province').click()
    cy.get('#edit').click()
    cy.wait(3000)
    cy.get('.ant-form-item-control-input-content > #province').clear()
    cy.wait(1000)
    cy.get('.ant-form-item-control-input-content > #province').type("province Update")
    cy.get('#description').clear()
    cy.wait(1000)
    cy.get('#description').clear().type("description Update")
    cy.wait(3000)
    cy.get('.ant-row-end > .ccGznZ > #edit > span').click()
    cy.wait(3000)

    cy.get('.ant-notification-notice-description').invoke('text').then(someText =>{

      expect(someText).equal('Province Updated Successfully')
    })
  }) 
  it('TC06 -[Delete]show the modal of Province Deleted Successfully', () => {
  
    cy.get('#login-form_email').type('superadmin@aboitiz.com')
    cy.get('#login-form_password').type('secret')
    cy.get('#create').click()
    cy.get(':nth-child(2) > .ant-menu-submenu-title > .ant-menu-title-content').click()
    cy.wait(5000)

  
    cy.get('#province').click()
    cy.get('#delete').click()
    cy.wait(3000)
    cy.get('.ant-btn-dangerous').click()
    cy.wait(3000)
    cy.get('.ant-notification-notice-description').invoke('text').then(someText =>{

      expect(someText).equal('Province Deleted Successfully')
    })
  })
  

 

})