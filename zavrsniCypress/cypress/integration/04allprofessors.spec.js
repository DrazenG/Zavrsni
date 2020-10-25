/// <reference types="Cypress"/>
const Locators = require("../fixtures/Locators.json")

describe ("All Professors",()=>{

    let correctEmail = "bbb@bbb.com"
    let correctPassword = "12345678"
    let imeProfesora= "Dobar"
    let prezimeProfesora = "Co'ek"
    let slikaProfesora = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Ron_Jeremy_2009.jpg/220px-Ron_Jeremy_2009.jpg"
 



    beforeEach("visit link",()=>{
        cy.visit("https://gradebook.vivifyideas.com/") 
    })

    
it("Click on All Professors drop-menu",()=>{
    cy.get(Locators.Header.SignIn).eq(0).click()
    cy.get(Locators.SignIn.Email).eq(0).type(correctEmail)
    cy.get(Locators.SignIn.Password).eq(1).type(correctPassword)
    cy.get(Locators.SignIn.Submit).click()
    cy.wait(2000)
    cy.get(Locators.Header2.Professors).should("be.visible")
    cy.get(Locators.Header2.Professors).eq(3).click()
    

})
it("All Professors",()=>{
    cy.get(Locators.Header.SignIn).eq(0).click()
    cy.get(Locators.SignIn.Email).eq(0).type(correctEmail)
    cy.get(Locators.SignIn.Password).eq(1).type(correctPassword)
    cy.get(Locators.SignIn.Submit).click()
    cy.wait(2000)
    cy.get(Locators.Header2.Professors).eq(3).click()
    cy.get(Locators.Professors.AllProfessors).eq(0).click()
    cy.get(Locators.Professors.AllProfessors).should("not.be.visible")
})
it("Create New Professor",()=>{
    cy.get(Locators.Header.SignIn).eq(0).click()
    cy.get(Locators.SignIn.Email).eq(0).type(correctEmail)
    cy.get(Locators.SignIn.Password).eq(1).type(correctPassword)
    cy.get(Locators.SignIn.Submit).click()
    cy.wait(2000)
    cy.get(Locators.Header2.Professors).eq(3).click()
    cy.wait(2000)
    cy.get(Locators.Professors.CreateProfessor).eq(1).click()
    cy.wait(2000)
    cy.get(Locators.Professors.FirstName).eq(0).type(imeProfesora)
    cy.wait(2000)
    cy.get(Locators.Professors.LastName).eq(0).type(prezimeProfesora)
    cy.get(Locators.Professors.AddImage).eq(0).click()
    cy.get(Locators.Professors.ImageLink).eq(0).type(slikaProfesora)
    cy.get(Locators.Professors.Submit).should("be.visible")
    cy.get(Locators.Professors.Submit).eq(4).click()
    
})


afterEach("Clear cache", ()=>{
    cy.clearLocalStorage()
})
})