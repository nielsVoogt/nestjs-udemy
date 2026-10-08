import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { TasksRepository } from './tasks.resository';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
// import { CreateTaskDto } from './dto/create-task.dto';
// import { TaskStatus } from './taskStatus.enum';
// import { TaskStatus } from './taskStatus.enum';
@Injectable()
export class TasksService {
  constructor(
    @Inject(TasksRepository)
    private tasksRepository: TasksRepository,
  ) {}

  // getAllTasks(): Task[] {
  //   return this.tasks;
  // }
  // getTasksWithFilters(filterDto: GetTaskFilterDto): Task[] {
  //   const { status, search } = filterDto;
  //   let tasks = this.getAllTasks();
  //   if (status) {
  //     tasks = tasks.filter((task) => task.status === status);
  //   }
  //   if (search) {
  //     tasks = tasks.filter((task) => {
  //       if (task.title.includes(search) || task.description.includes(search)) {
  //         return true;
  //       }
  //       return false;
  //     });
  //   }
  //   return tasks;
  // }

  async getTaskById(id: string): Promise<Task> {
    const found = await this.tasksRepository.findOneBy({ id });

    if (!found) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }

    return found;
  }

  createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksRepository.createTask(createTaskDto);
  }

  deleteTask(id: string) {
    return this.tasksRepository.deleteTask(id);
  }

  // updateTaskStatus(id: string, status: TaskStatus): Task | Error {
  //   const task = this.getTaskById(id);
  //   if (!task) {
  //     throw new Error(`Task with ID "${id}" not found`);
  //   }
  //   task.status = status;
  //   return task;
  // }
}
