import { PriorityQueue } from './PriorityQueue';

type Task = () => Promise<any>;

export interface SchedulerI {
  postTask(task: Task, priority: number): void;
  run(): Promise<void>;
}

export class Scheduler implements SchedulerI {
  constructor(private schedule: PriorityQueue<Task> = new PriorityQueue()) {};

  postTask(task: Task, priority: number): void {
    this.schedule.enqueue(task, priority);
  }

  async run(): Promise<void> {
    while (this.schedule.size()) {
      (() => {
        const task = this.schedule.dequeue();
        task();
      })();
    }
    return await Promise.resolve();
  }
}
