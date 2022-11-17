/// <reference types="cypress" />


describe('AWP Year Submodule', () => {
  beforeEach(() => {
    
    cy.visit('http://apri-er194.redcoresolutions.com/apri/login')
  })

  it('Creating AWP Year', () => {
   


    cy.get('#login-form_email').type('superadmin@aboitiz.com')
    cy.get('#login-form_password').type('secret')
    cy.get('#create').click()
    cy.get(':nth-child(2) > .ant-menu-submenu-title > .ant-menu-title-content').click()
    cy.wait(5000)

    cy.get('#awpyear').click()
    cy.wait(5000)

    cy.get('#create').click()
    
    cy.get('#description').type("Description create")
    cy.get('.ant-picker-input').click().type(2021)
    cy.wait(5000)

    cy.get('.ant-row-end > .CCjnl > #create').click()
    
    cy.wait(3000)

  })



  it('Update AWP Year', () => {
   
    cy.get('#login-form_email').type('superadmin@aboitiz.com')
    cy.get('#login-form_password').type('secret')
    cy.get('#create').click()
    cy.get(':nth-child(2) > .ant-menu-submenu-title > .ant-menu-title-content').click()
    cy.wait(5000)

    cy.get('#awpyear').click()
    
    cy.get('#edit').click()
    cy.get('#description').clear()
    cy.get('#description').type("Description update")
  
    cy.get('.ant-picker-input').click().clear().type(2025)
    cy.wait(5000)

    cy.get('.ant-row-end > .dogVpJ > #edit > span').click()
    cy.wait(3000)


  })
  it('Delete AWP Year', () => {
   
    cy.get('#login-form_email').type('superadmin@aboitiz.com')
    cy.get('#login-form_password').type('secret')
    cy.get('#create').click()
    cy.get(':nth-child(2) > .ant-menu-submenu-title > .ant-menu-title-content').click()
    cy.wait(5000)

    cy.get('#awpyear').click()
    
    cy.get('#delete').click()
    cy.wait(3000)
    cy.get('.ant-btn-dangerous').click()
    cy.wait(3000)

   
    


  })
 


})

//////////////////////////////////////////////////////



describe('Province Submodule', () => {
  beforeEach(() => {
    
    cy.visit('http://apri-er194.redcoresolutions.com/apri/login')
  })

  it('Creating Province', () => {
   
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
    cy.get('.ant-row-end > .CCjnl > #create > span').click().should('not.exist')
    cy.wait(3000)
  })

 

  it('Update Province', () => {
   
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
    cy.get('#description').clear().clear()
    cy.wait(1000)
    cy.get('#description').clear().type("description Update")
    cy.wait(3000)
    cy.get('.ant-row-end > .dogVpJ > #edit').click()
    cy.wait(3000)
  })


  it('Delete Province', () => {
   
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
  })

})


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






  




//////////////////////////////////////////////////////



describe('Project Status Submodule', () => {
  beforeEach(() => {
    
    cy.visit('http://apri-er194.redcoresolutions.com/apri/login')
  })

  it('Creating Project Status', () => {
   
    cy.get('#login-form_email').type('superadmin@aboitiz.com')
    cy.get('#login-form_password').type('secret')
    cy.get('#create').click()
    cy.get(':nth-child(2) > .ant-menu-submenu-title > .ant-menu-title-content').click()
    cy.wait(5000)

  
    cy.get('#projectstatus').click()
    cy.get('#create').click()
    cy.wait(3000)
    cy.get('#name').type("Project Status Create")
    cy.get('#description').type("description Create")
    cy.wait(3000)
    cy.get('.ant-row-end > .CCjnl > #create > span').click()
    cy.wait(3000)
  })

 

  it('Update Project Status', () => {
   
    cy.get('#login-form_email').type('superadmin@aboitiz.com')
    cy.get('#login-form_password').type('secret')
    cy.get('#create').click()
    cy.get(':nth-child(2) > .ant-menu-submenu-title > .ant-menu-title-content').click()
    cy.wait(5000)

  
    cy.get('#projectstatus').click()
    cy.get('#edit').click()
    cy.wait(3000)
    cy.get('#name').clear()
    cy.wait(1000)
    cy.get('#name').type("projectstatus Update")
    cy.get('#description').clear()
    cy.wait(1000)
    cy.get('#description').clear().type("description Update")
    cy.wait(3000)
    cy.get('.ant-row-end > .dogVpJ > #edit > span').click()
    cy.wait(3000)
  })


  it('Delete Project Status', () => {
   
    cy.get('#login-form_email').type('superadmin@aboitiz.com')
    cy.get('#login-form_password').type('secret')
    cy.get('#create').click()
    cy.get(':nth-child(2) > .ant-menu-submenu-title > .ant-menu-title-content').click()
    cy.wait(5000)

  
    cy.get('#projectstatus').click()
    cy.get('#delete').click()
    cy.wait(3000)
    cy.get('.ant-btn-dangerous').click()
    cy.wait(3000)
  })
  

})


describe('Inquiry Status Submodule', () => {
  beforeEach(() => {
    
    cy.visit('http://apri-er194.redcoresolutions.com/apri/login')
  })

  it('Creating Inquiry Status', () => {
   
    cy.get('#login-form_email').type('superadmin@aboitiz.com')
    cy.get('#login-form_password').type('secret')
    cy.get('#create').click()
    cy.get(':nth-child(2) > .ant-menu-submenu-title > .ant-menu-title-content').click()
    cy.wait(5000)

  
    cy.get('#inquirystatus').click()
    cy.get('#create').click()
    cy.wait(3000)
    cy.get('#name').type("Inquiry Status Create")
    cy.get('#description').type("description Create")
    cy.wait(3000)
    cy.get('.ant-row-end > .CCjnl > #create > span').click()
    cy.wait(3000)
  })

 

  it('Update Inquiry Status', () => {
   
    cy.get('#login-form_email').type('superadmin@aboitiz.com')
    cy.get('#login-form_password').type('secret')
    cy.get('#create').click()
    cy.get(':nth-child(2) > .ant-menu-submenu-title > .ant-menu-title-content').click()
    cy.wait(5000)

  
    cy.get('#inquirystatus').click()
    cy.get('#edit').click()
    cy.wait(3000)
    cy.get('#name').clear()
    cy.wait(1000)
    cy.get('#name').type("Inquiry Status Update")
    cy.get('#description').clear()
    cy.wait(1000)
    cy.get('#description').clear().type("description Update")
    cy.wait(3000)
    cy.get('.ant-row-end > .dogVpJ > #edit').click()
    cy.wait(3000)
  })


  it('Delete Inquiry Status', () => {
   
    cy.get('#login-form_email').type('superadmin@aboitiz.com')
    cy.get('#login-form_password').type('secret')
    cy.get('#create').click()
    cy.get(':nth-child(2) > .ant-menu-submenu-title > .ant-menu-title-content').click()
    cy.wait(5000)

  
    cy.get('#inquirystatus').click()
    cy.get('#delete').click()
    cy.wait(3000)
    cy.get('.ant-btn-dangerous > span').click()
    cy.wait(3000)
  })
  
})



describe('Remittance Status Submodule', () => {
  beforeEach(() => {
    
    cy.visit('http://apri-er194.redcoresolutions.com/apri/login')
  })

  it('Creating Remittance Status', () => {
   
    cy.get('#login-form_email').type('superadmin@aboitiz.com')
    cy.get('#login-form_password').type('secret')
    cy.get('#create').click()
    cy.get(':nth-child(2) > .ant-menu-submenu-title > .ant-menu-title-content').click()
    cy.wait(5000)

  
    cy.get('#remittancestatus').click()
    cy.get('#create').click()
    cy.wait(3000)
    cy.get('#name').type("Remittance Status Create")
    cy.get('#description').type("description Create")
    cy.wait(3000)
    cy.get('.ant-row-end > .CCjnl > #create > span').click()
    cy.wait(3000)
  })

 

  it('Update Remittance Status', () => {
   
    cy.get('#login-form_email').type('superadmin@aboitiz.com')
    cy.get('#login-form_password').type('secret')
    cy.get('#create').click()
    cy.get(':nth-child(2) > .ant-menu-submenu-title > .ant-menu-title-content').click()
    cy.wait(5000)

  
    cy.get('#remittancestatus').click()
    cy.get('#edit').click()
    cy.wait(3000)
    cy.get('#name').clear()
    cy.wait(1000)
    cy.get('#name').type("Remittance Status Update")
    cy.get('#description').clear()
    cy.wait(1000)
    cy.get('#description').clear().type("description Update")
    cy.wait(3000)
    cy.get('.ant-row-end > .dogVpJ > #edit').click()
    cy.wait(3000)
  })


  it('Delete Remittance Status', () => {
   
    cy.get('#login-form_email').type('superadmin@aboitiz.com')
    cy.get('#login-form_password').type('secret')
    cy.get('#create').click()
    cy.get(':nth-child(2) > .ant-menu-submenu-title > .ant-menu-title-content').click()
    cy.wait(5000)

  
    cy.get('#remittancestatus').click()
    cy.get('#delete').click()
    cy.wait(3000)
    cy.get('.ant-btn-dangerous > span').click()
    cy.wait(3000)
  })
  
})




describe('Remittance Status Submodule', () => {
  beforeEach(() => {
    
    cy.visit('http://apri-er194.redcoresolutions.com/apri/login')
  })

  

  it('Update Fund Type', () => {
   
    cy.get('#login-form_email').type('superadmin@aboitiz.com')
    cy.get('#login-form_password').type('secret')
    cy.get('#create').click()
    cy.get(':nth-child(2) > .ant-menu-submenu-title > .ant-menu-title-content').click()
    cy.wait(5000)

  
    cy.get('#fundtype').click()
    cy.get('[data-row-key="97a94a95-f800-4fb2-a72d-cba504ab558a"] > [style="text-align: center;"] > .sc-AHaJN > .sc-gswNZR > #edit > span').click()
    cy.wait(3000)
    cy.get('#name').clear()
    cy.wait(1000)
    cy.get('#name').type("fundtype Update")
    cy.get('#description').clear()
    cy.wait(1000)
    cy.get('#description').clear().type("description Update")
    cy.wait(3000)
    cy.get('.ant-row-end > .dogVpJ > #edit').click()
    cy.wait(3000)



    cy.get('#fundtype').click()
    cy.get('[data-row-key="97a94a95-f800-4fb2-a72d-cba504ab558a"] > [style="text-align: center;"] > .sc-AHaJN > .sc-gswNZR > #edit > span').click()
    cy.wait(3000)
    cy.get('#name').clear()
    cy.wait(1000)
    cy.get('#name').type("EF")
    cy.get('#description').clear()
    cy.wait(1000)
    cy.get('#description').clear().type("EF Fund Type")
    cy.wait(3000)
    cy.get('.ant-row-end > .dogVpJ > #edit').click()
    cy.wait(3000)
   
  })




  })
