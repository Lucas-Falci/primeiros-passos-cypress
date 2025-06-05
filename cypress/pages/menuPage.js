class MenuPage {

  selectorsList() {
    const selectors = {
      myInfoButton:'[href="/web/index.php/pim/viewMyDetails"]',
      performanceButton: '[href="/web/index.php/performance/viewPerformanceModule"]',
      recruimentButton: '[href="/web/index.php/recruitment/viewRecruitmentModule"]',
      timeButton: '[href="/web/index.php/time/viewTimeModule"]',
      leaveButton: '[href="/web/index.php/leave/viewLeaveModule"]',
      pimButton: '[href="/web/index.php/pim/viewPimModule"]',
      adminButton: '[href="/web/index.php/admin/viewAdminModule"]',
      searchButton: '.oxd-input--active',
      directoryButton: '[href="/web/index.php/directory/viewDirectory"]',
      maintenanceButton: '[href="/web/index.php/maintenance/viewMaintenanceModule"]',
      claimButton: '[href="/web/index.php/claim/viewClaimModule"]',
      buzzButton: '[href="/web/index.php/buzz/viewBuzz"]'
    }
    
    return selectors
  }

  accessMyInfo() {
    cy.get(this.selectorsList().myInfoButton).click()
  }
  
  accessPerformance() {
    cy.get(this.selectorsList().performanceButton).click()
  }

  accessRecruitment() {
    cy.get(this.selectorsList().recruimentButton).click()
  }

  accessTime() {
    cy.get(this.selectorsList().timeButton).click()
  }

  accessLeave() {
    cy.get(this.selectorsList().leaveButton).click()
  }

  accessPim() {
    cy.get(this.selectorsList().pimButton).click()
  }

  accessAdmin() {
    cy.get(this.selectorsList().adminButton).click()
  }

  accessSearch() {
    cy.get(this.selectorsList().searchButton).type('Test')
  }

  accessDirectory() {
    cy.get(this.selectorsList().directoryButton).click()
  }

  accessMaintenance() {
    cy.get(this.selectorsList().maintenanceButton).click()
  }

  accessClaim() {
    cy.get(this.selectorsList().claimButton).click()
  }

  accessBuzz() {
    cy.get(this.selectorsList().buzzButton).click()
  }
}

export default MenuPage