import { CommonRoutesConfig } from '../common/common.routes.config'
import TasksController from './controllers/tasks.controller'
import express from 'express'

export class TasksRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'TasksRoutes')
    }

    configureRoutes(): express.Application {
        this.app
            .route('/tasks')
            .get(TasksController.listTasks)
            .post(TasksController.createTask)

        this.app
            .route('/tasks/:taskId')
            .get(TasksController.getTaskById)
            .post(TasksController.put)
            .patch(TasksController.patch)
            .delete(TasksController.removeTask)

        return this.app
    }
}
