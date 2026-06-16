const selectorsList = {
  dashboardScreen: '[data-cy="dashboard-screen"]',
  taskInput: '[data-cy="task-input"]',
  addTaskButton: '[data-cy="add-task-button"]',
  taskItem: '[data-cy="task-item"]',
  toggleTaskButton: '[data-cy="toggle-task-button"]',
  deleteTaskButton: '[data-cy="delete-task-button"]'
}

class TaskPage {

assertDashboardVisible() {
    cy.get(selectorsList.dashboardScreen).should('be.visible')
}

    addTask(taskName) {
        cy.get(selectorsList.taskInput).type(taskName)
        cy.get(selectorsList.addTaskButton).click()
    }

    assertTaskVisible(taskName) {
        cy.get(selectorsList.taskItem)
            .should('be.visible')
            .and('contain', taskName)
    }

    completeTask(taskName) {
        cy.contains(selectorsList.taskItem, taskName)
            .should('be.visible')
            .within(() => {
                cy.get(selectorsList.toggleTaskButton).click()
            })
    }
    
    assertTaskCompleted(taskName) {
        cy.contains(selectorsList.taskItem, taskName)
            .should('have.class', 'completed')
        cy.contains(selectorsList.taskItem, taskName)
            .contains('Concluída')
            .should('be.visible')
        
    } 

    deleteTask(taskName) {
        cy.contains(selectorsList.taskItem, taskName)
            .should('be.visible')
            .within(() => {
                cy.get(selectorsList.deleteTaskButton).click()
            })
    }
    
    assertTaskNotExist(taskName) {
        cy.contains(selectorsList.taskItem, taskName).should('not.exist')
    }

}

export default new TaskPage()