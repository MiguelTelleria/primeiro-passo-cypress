describe('Orange HRM Tests', () => {
  it('Login Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[placeholder='Username']").type('Admin')
    cy.get("[name='password']").type('admin123')
    cy.get("[type='submit']").click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get('.oxd-topbar-header-breadcrumb-module').contains('Dashboard')
  })
  it('Login Failure', () => {
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  cy.get("[placeholder='Username']").type('Test')
  cy.get("[name='password']").type('Test')
  cy.get('.oxd-button').click()
  cy.get('.oxd-alert')
 
  })
  

})