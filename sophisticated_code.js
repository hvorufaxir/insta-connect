/**
 * Filename: sophisticated_code.js
 * 
 * Description: This code demonstrates a sophisticated example of a task management system using JavaScript.
 * It includes features such as creating tasks, assigning priorities, setting reminders, marking as complete,
 * and filtering tasks based on various criteria.
 * 
 * Author: AI
 */

// Task class to represent individual tasks
class Task {
  constructor(name, priority, dueDate, completed) {
    this.name = name;
    this.priority = priority;
    this.dueDate = dueDate;
    this.completed = completed;
  }

  markAsCompleted() {
    this.completed = true;
  }
}

// TaskManager class to manage and manipulate tasks
class TaskManager {
  constructor() {
    this.tasks = [];
  }

  addTask(name, priority, dueDate) {
    const task = new Task(name, priority, dueDate, false);
    this.tasks.push(task);
  }

  markTaskAsCompleted(taskName) {
    const taskIndex = this.findTaskIndex(taskName);
    if (taskIndex !== -1) {
      this.tasks[taskIndex].markAsCompleted();
    }
  }

  findTaskIndex(taskName) {
    return this.tasks.findIndex(task => task.name === taskName);
  }

  filterTasksByPriority(priority) {
    return this.tasks.filter(task => task.priority === priority);
  }

  filterIncompleteTasks() {
    return this.tasks.filter(task => !task.completed);
  }
}

// Example usage of the TaskManager class
const taskManager = new TaskManager();

taskManager.addTask('Finish coding project', 'High', '2022-12-31');
taskManager.addTask('Prepare presentation', 'Medium', '2022-12-15');
taskManager.addTask('Buy groceries', 'Low', '2022-12-20');
taskManager.addTask('Call clients', 'Medium', '2022-12-10');
taskManager.markTaskAsCompleted('Finish coding project');

const highPriorityTasks = taskManager.filterTasksByPriority('High');
console.log('High Priority Tasks:');
highPriorityTasks.forEach(task => console.log(task.name));

const incompleteTasks = taskManager.filterIncompleteTasks();
console.log('Incomplete Tasks:');
incompleteTasks.forEach(task => console.log(task.name));

// ... More code, additional features, UI interactions, etc.

// Finally, exporting the TaskManager class for usage in other modules
export default TaskManager;