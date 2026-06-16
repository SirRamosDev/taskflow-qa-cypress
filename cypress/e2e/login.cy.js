import taskFlowData from '../fixtures/taskFlowData.json'
import LoginPage from '../pages/loginPage.js'
import TaskPage from '../pages/taskPage.js'


describe('Login', () => {

  it('deve fazer login com sucesso', () => {
    LoginPage.login(taskFlowData.validUser.username, taskFlowData.validUser.password)

    TaskPage.assertDashboardVisible()
    cy.contains('Minhas tarefas').should('be.visible')

  })

  it('deve exibir mensagem de erro ao fazer login com credenciais inválidas', () => {
    LoginPage.login(taskFlowData.invalidUser.username, taskFlowData.invalidUser.password)

    LoginPage.VerificarLoginError(taskFlowData.invalidLogin.messages)
  
  })
  

})