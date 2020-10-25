/// <reference types="Cypress" />
export default class AuthRegister {

    get firstName () {
        return cy.get("#name")
    }

    get lastName ()  {
        return cy.get("#last-name")
    }

    get email () {
        return cy.get("#email")
    }

    get password () {
        return cy.get("#password")
    }

    get passwordConfirmation () {
        return cy.get("#passwordConfirmation")
    }
    

    get submit () {
        return cy.get(".btn")
    }

    register(ime, prezime, mejl, sifra, sifraOpet) {
        this.firstName.type(ime)
        this.lastName.type(prezime)
        this.email.type(mejl)
        this.password.type(sifra)
        this.passwordConfirmation.type(sifraOpet)
        this.termsAndConditions.click()
        this.submit.click()
    }


}

export const authRegister = new AuthRegister