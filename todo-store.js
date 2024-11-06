class TodoStore {
  constructor() {
    this.todos = [];
  }

  getTodos() {
    return this.todos;
  }
}

export const todoStore = new TodoStore();
