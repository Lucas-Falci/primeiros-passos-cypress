class MyInfoPage {

  selectorsList() {
    const selectors = {
      firstNameField: "[name='firstName']",
      lastNameField: "[name='lastName']",
      genericField: ".oxd-input--active",
      dateField: "[placeholder='yyyy-dd-mm']",
      dateCloseButton: ".--close",
      submitButton: "[type='submit']",
      genericComboBox: ".oxd-select-text--arrow",
      fourthComboBox: ".oxd-select-dropdown > :nth-child(4)",
      thirdComboBox: ".oxd-select-dropdown > :nth-child(3)",
    }

    return selectors
  }

    fillPersonalDetails(firstName, lastName) {
      cy.get(this.selectorsList().firstNameField).clear().type(firstName)
      cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    }

    fillEmployeeDetails(employeeId, otherIdTest, driversLicenseNumber, expiryDate){
      cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
      cy.get(this.selectorsList().genericField).eq(4).clear().type(otherIdTest)
      cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicenseNumber)
      cy.get(this.selectorsList().genericField).eq(6).clear().type(expiryDate)
      cy.get(this.selectorsList().dateCloseButton).click()
    }
  
    fillStatus() {
      cy.get(this.selectorsList().genericComboBox).eq(0).click()
      cy.get(this.selectorsList().fourthComboBox).click()
      cy.get(this.selectorsList().genericComboBox).eq(1).click()
      cy.get(this.selectorsList().thirdComboBox).click()
    }

    saveForm() {
      cy.get(this.selectorsList().submitButton).eq(0).click({ force: true })
      cy.get('body').should('contain', 'Successfully Updated')
      cy.get('.oxd-toast-close')
    }
}

export default MyInfoPage