/// <reference types="Cypress"/>
const Locators = require("../fixtures/Locators.json")

describe ("Login funkcija",()=>{

    let correctEmail = "bbb@bbb.com"
    let correctPassword = "12345678"

    beforeEach("visit link",()=>{
        cy.visit("https://gradebook.vivifyideas.com/") 
    })

    
it("User Login", ()=>{
    cy.get(Locators.Header.SignIn).eq(0).click()
    cy.get(Locators.SignIn.Email).eq(0).type(correctEmail)
    cy.get(Locators.SignIn.Password).eq(1).type(correctPassword)
    cy.get(Locators.SignIn.Submit).should("be.visible")
    cy.get(Locators.SignIn.Submit).click()
})

afterEach("Clear cache", ()=>{
    cy.clearLocalStorage()
})
})