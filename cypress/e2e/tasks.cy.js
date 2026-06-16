import taskFlowData from '../fixtures/taskFlowData.json'
import LoginPage from '../pages/loginPage.js'
import TaskPage from '../pages/taskPage.js'

describe('Tasks test', () => {

    beforeEach(() => {
        LoginPage.login(taskFlowData.validUser.username, taskFlowData.validUser.password)
        TaskPage.assertDashboardVisible()

    })

    it('Adicionar Tarefa com sucesso', () => {
        TaskPage.addTask(taskFlowData.tasks.simpleTask)
        TaskPage.assertTaskVisible(taskFlowData.tasks.simpleTask)

    })

    it('Deve marcar uma tarefa como concluída', () => {
        TaskPage.addTask(taskFlowData.tasks.studyTask)
        TaskPage.completeTask(taskFlowData.tasks.studyTask)
        TaskPage.assertTaskCompleted(taskFlowData.tasks.studyTask)

    })

    it('Excluir tarefa', () => {
        TaskPage.addTask(taskFlowData.tasks.commitTask)
        TaskPage.assertTaskVisible(taskFlowData.tasks.commitTask)
        TaskPage.deleteTask(taskFlowData.tasks.commitTask)
        TaskPage.assertTaskNotExist(taskFlowData.tasks.commitTask)

    })


})