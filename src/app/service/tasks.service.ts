import { Injectable } from '@angular/core';

class Task {
  title: string;
}

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  constructor() {}

  add(title: string) {
    this.tasks.push({ title });
  }
  remove(index: number) {
    this.tasks.splice(index, 1);
  }
  getList() {
    return this.tasks;
  }
}
