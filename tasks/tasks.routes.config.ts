import { CommonRoutesConfig } from "../common/common.routes.config";
import express from "express";

export class TasksRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, "TasksRoutes");
  }

  configureRoutes(): express.Application {
    this.app
      .route("/tasks")
      .get((req: express.Request, res: express.Response) => {
        console.log(req);
        res.status(200).send("List of tasks");
      })
      .post((req: express.Request, res: express.Response) => {
        console.log(req);
        res.status(200).send("Created task");
      });

    this.app
      .route("/tasks/:taskId")
      .get((req: express.Request, res: express.Response) => {
        console.log(req);
        res.status(200).send("List of tasks");
      })
      .post((req: express.Request, res: express.Response) => {
        console.log(req);
        res.status(200).send("Created task");
      })
      .patch((req: express.Request, res: express.Response) => {
        console.log(req);
        res.status(200).send("Created task");
      })
      .delete((req: express.Request, res: express.Response) => {
        console.log(req);
        res.status(200).send("Created task");
      });

    return this.app;
  }
}
