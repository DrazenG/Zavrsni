/// <reference types="Cypress"/>
const Locators = require("../fixtures/Locators.json")

describe ("Login funkcija",()=>{

    let correctEmail = "bbb@bbb.com"
    let correctPassword = "12345678"
    let imePredmeta = "Zanimacija"
    let noviPredmet = "1"
    let professor = "bbb bbb"
    let imeUcenika = "Prokopije"
    let prezimeUcenika = "Krompic"
    let slikaUcenika = "https://media.luftika.rs/2019/04/jordi-el-nino-dveri.jpg"
    let comment = "NewRetroWave"

    beforeEach("visit link",()=>{
        cy.visit("https://gradebook.vivifyideas.com/") 
    })


//da bi ovo bilo ok, treba nam novi korisnik,a ne postojeci
it("CreateGradebook", ()=>{
    cy.get(Locators.Header.SignIn).eq(0).click()
    cy.get(Locators.SignIn.Email).eq(0).type(correctEmail)
    cy.get(Locators.SignIn.Password).eq(1).type(correctPassword)
    cy.get(Locators.SignIn.Submit).click()
    cy.wait(2000)
    cy.get(Locators.Header2.CreateGradebook).should("be.visible")
    cy.get(Locators.Header2.CreateGradebook).eq(2).click()
    cy.get(Locators.CreateGradebook.GradebookTitle).eq(0).type(imePredmeta)
    cy.get('select').select(professor)
    cy.wait(2000)
    cy.get(Locators.CreateGradebook.Submit).click()
})

//Ovo dole je ok
it("My Gradebook-Add Student", ()=>{
    cy.get(Locators.Header.SignIn).eq(0).click()
    cy.get(Locators.SignIn.Email).eq(0).type(correctEmail)
    cy.get(Locators.SignIn.Password).eq(1).type(correctPassword)
    cy.get(Locators.SignIn.Submit).click()
    cy.wait(2000)
    cy.get(Locators.Header2.MyGradebook).eq(1).click()
    cy.wait(2000)
    cy.get(Locators.MyGradebook.AddStudent).should("be.visible")
    cy.get(Locators.MyGradebook.AddStudent).eq(0).click()
    cy.wait(2000)
    cy.get(Locators.MyGradebook.FirstName).eq(0).type(imeUcenika)
    cy.get(Locators.MyGradebook.LastName).eq(1).type(prezimeUcenika)
    cy.get(Locators.MyGradebook.AddImage).eq(0).click()
    cy.get(Locators.MyGradebook.ImageLink).eq(2).type(slikaUcenika)
    cy.get(Locators.MyGradebook.Submit).eq(4).click()

})

it("My Gradebook-Edit Gradebook" , ()=>{
    cy.get(Locators.Header.SignIn).eq(0).click()
    cy.get(Locators.SignIn.Email).eq(0).type(correctEmail)
    cy.get(Locators.SignIn.Password).eq(1).type(correctPassword)
    cy.get(Locators.SignIn.Submit).click()
    cy.wait(2000) 
    cy.get(Locators.Header2.MyGradebook).should("be.visible")
    cy.get(Locators.Header2.MyGradebook).eq(1).click()
    cy.wait(2000) 
    cy.get(Locators.MyGradebook.EditGradebook).should("be.visible")
    cy.get(Locators.MyGradebook.EditGradebook).click()
    cy.get(Locators.MyGradebook.GradebookTitle).eq(0).type(noviPredmet)
    cy.get('select').select(professor)
    cy.get(Locators.MyGradebook.Submit).click()

})
//ovo dole je ok
it("My Gradebook-Add Comment" , ()=>{
    cy.get(Locators.Header.SignIn).eq(0).click()
    cy.get(Locators.SignIn.Email).eq(0).type(correctEmail)
    cy.get(Locators.SignIn.Password).eq(1).type(correctPassword)
    cy.get(Locators.SignIn.Submit).click()
    cy.wait(2000) 
    cy.get(Locators.MyGradebook.AddComments).should("be.visible")
    cy.get(Locators.Header2.MyGradebook).eq(1).click()
    cy.get(Locators.MyGradebook.AddComments).eq(0).type(comment)
    cy.wait(2000)
    cy.get(Locators.MyGradebook.SubmitComment).should("be.visible")
    cy.get(Locators.MyGradebook.SubmitComment).eq(1).click()
    

})

it("My Gradebook-Delete Comment" , ()=>{
    cy.get(Locators.Header.SignIn).eq(0).click()
    cy.get(Locators.SignIn.Email).eq(0).type(correctEmail)
    cy.get(Locators.SignIn.Password).eq(1).type(correctPassword)
    cy.get(Locators.SignIn.Submit).click()
    cy.wait(2000) 
    cy.get(Locators.Header2.MyGradebook).eq(1).click()
    cy.wait(2000)
    cy.get(Locators.MyGradebook.DeleteComment).should("be.visible")
    cy.get(Locators.MyGradebook.DeleteComment).eq(1).click()

})

it("My Gradebook- Delete Gradebook" , ()=>{
    cy.get(Locators.Header.SignIn).eq(0).click()
    cy.get(Locators.SignIn.Email).eq(0).type(correctEmail)
    cy.get(Locators.SignIn.Password).eq(1).type(correctPassword)
    cy.get(Locators.SignIn.Submit).click()
    cy.wait(2000) 
    cy.get(Locators.Header2.MyGradebook).eq(1).click()
    cy.get(Locators.MyGradebook.DeleteGradebook).eq(1).click()
    cy.get(Locators.MyGradebook).should("not.be.visible")
   
    

})


afterEach("Clear cache", ()=>{
    cy.clearLocalStorage()
})
})