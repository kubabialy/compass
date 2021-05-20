import express from 'express'
import { getRepository, Repository } from 'typeorm'
import { Task } from '../entities/task.entity'

class TasksController {
    private taskRepository: Repository<Task> = getRepository(Task)

    async listTasks(req: express.Request, res: express.Response) {
        return res.status(200).send(this.taskRepository.find())
    }

    async getTaskById(req: express.Request, res: express.Response) {
        const taskId = req.params.task_id

        if (taskId === null) {
            throw Error('Param `task_id` cannot be null')
        }

        const task = this.taskRepository.findOne(taskId)

        res.status(200).send(task)
    }

    async createTask(req: express.Request, res: express.Response) {
        const task = new Task()

        task.name = req.params.task_name
        req.params.task_completed
            ? task.markCompleted()
            : task.markNotCompleted()

        this.taskRepository.save(task)

        res.status(201).send(task)
    }
    async patch(req: express.Request, res: express.Response) {}
    async put(req: express.Request, res: express.Response) {}
    async removeTask(req: express.Request, res: express.Response) {}
}

export default new TasksController()
