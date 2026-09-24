import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
@Injectable()
export class TasksService {
  private readonly tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  createTask(title: string, description: string): Task {
    const task: Task = {
      id: Math.random().toString(),
      title,
      description,
      status: TaskStatus.OPEN,
    };
    this.tasks.push(task);
    return task;
  }
}
