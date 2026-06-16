
 const selectorsList = {
        usernameInput: '[data-cy="username-input"]',
        passwordInput: '[data-cy="password-input"]',
        loginButton: '[data-cy="login-button"]',
        loginError: '[data-cy="login-error"]'
    }

class LoginPage{

    AcessarPaginaLogin(){
        cy.visit('/')
    }

    PreencherUsername(username){
        cy.get(selectorsList.usernameInput).type(username)
    }

    PreencherPassword(password){
        cy.get(selectorsList.passwordInput).type(password)
    }

    ClicarBotaoLogin(){
        cy.get(selectorsList.loginButton).click()
    }

    login(username, password){
        this.AcessarPaginaLogin()
        this.PreencherUsername(username)
        this.PreencherPassword(password)
        this.ClicarBotaoLogin()
    }

    VerificarLoginError(message){
        cy.get(selectorsList.loginError)
        .should('be.visible')
        .and('contain', message)
    }
}

export default new LoginPage()