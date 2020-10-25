/// <reference types="Cypress"/>
const Locators = require("../fixtures/Locators.json")
import faker from 'faker'

describe ("Register funkcija",()=>{

    let correctEmail = "bbb@bbb.com"
    let correctPassword = "12345678"
    let passwordConfirmation = "12345678"
    let firstName = "bbb"
    let lastName = "bbb"

    beforeEach("visit link",()=>{
        cy.visit("https://gradebook.vivifyideas.com/") 
    })

    
it("Create user",()=>{
    cy.get(Locators.Header.Register).should("be.visible")
    cy.get(Locators.Header.Register).eq(1).click()
    cy.get(Locators.Register.FirstName).eq(0).type(firstName)
    cy.get(Locators.Register.LastName).eq(1).type(lastName)
    cy.get(Locators.Register.Email).eq(4).type(correctEmail)
    cy.get(Locators.Register.Password).eq(2).type(correctPassword)
    cy.get(Locators.Register.PasswordConfirmation).eq(3).type(passwordConfirmation)
    cy.get(Locators.Register.Submit).should("be.visible")
    cy.get(Locators.Register.Submit).click()
})


afterEach("Clear cache", ()=>{
    cy.clearLocalStorage()
})
})