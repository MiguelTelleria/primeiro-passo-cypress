import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()

describe('Orange HRM Tests', () => {

  const selectorsList = {
   
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    nicknameField: '',
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-mm-dd']",
    genericCombobox: ".oxd-select-text--arrow",
    secondItemCombobox: ".oxd-select-dropdown > :nth-child(27)",
    thirdItemCombobox: ".oxd-select-dropdown > :nth-child(2)",
     dateCloseButton: ".--close",
    submitButton: "[type='submit']",

    }

    it.only('User Info Update Success', () => {
      loginPage.accessLoginPage()
      loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

      dashboardPage.checkDashboardPage()
    
      menuPage.accessMyInfo()
    cy.get(selectorsList.firstNameField).clear().type('FirstNameTest')
    cy.get(selectorsList.lastNameField).clear().type('LastNameTest')
    cy.get(selectorsList.genericField).eq(3).clear().type('EmployeeId')
    cy.get(selectorsList.genericField).eq(4).clear().type('OtherIdTest')
    cy.get(selectorsList.genericField).eq(5).clear().type('DriversLicenseTest')
    cy.get(selectorsList.genericField).eq(6).clear().type('2025-03-10')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.submitButton).eq(0).click({force: true})
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')
    cy.get(selectorsList.genericCombobox).eq(0).click()
    cy.get(selectorsList.secondItemCombobox).click()
    cy.get(selectorsList.genericCombobox).eq(1).click()
    cy.get(selectorsList.thirdItemCombobox).click()


    


  })
  it('Login Failure', () => {
  cy.visit('/auth/login')
  cy.get(selectorsList.usernameField).type(userData.userFail.username)    
  cy.get(selectorsList.passwordField).type(userData.userFail.password)  
  cy.get(selectorsList.loginButton).click()
  cy.get(selectorsList.wrongCredentialAlert)
 
    })
  })