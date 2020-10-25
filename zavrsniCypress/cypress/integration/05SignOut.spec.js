/// <reference types="Cypress"/>
const Locators = require("../fixtures/Locators.json")


describe ("Log Out",()=>{

    let correctEmail = "bbb@bbb.com"
    let correctPassword = "12345678"

    beforeEach("visit link",()=>{
        cy.visit("https://gradebook.vivifyideas.com/") 
    })

    
it("Sign Out", ()=>{
    cy.get(Locators.Header.SignIn).eq(0).click()
    cy.get(Locators.SignIn.Email).eq(0).type(correctEmail)
    cy.get(Locators.SignIn.Password).eq(1).type(correctPassword)
    cy.get(Locators.SignIn.Submit).click()
    cy.wait(2000)
    cy.get(Locators.Header2.SignOut).should("be.visible")
    cy.get(Locators.Header2.SignOut).eq(4).click()
    cy.wait(2000)
    cy.get(Locators.Header.SignIn).should("be.visible")
})

afterEach("Clear cache", ()=>{
    cy.clearLocalStorage()
})
})