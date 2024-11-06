import { todoStore } from "./todo-store.js";

class TodoForm extends HTMLElement {
  connectedCallback() {
    this.renderForm();

    this.$todo_input = this.querySelector("#todo_input");
    this.$todo_add_btn = this.querySelector("#todo_add_btn");
    this.$todo_form = this.querySelector(".todo_form");
    this.task = "";

    this.$todo_form.addEventListener("submit", (event) => {
      event.preventDefault();
      this.createTodo();
    });
  }

  attributeChangedCallback() {}

  disconnectedCallback() {}

  createTodo() {
    // todoStore.getTodos();
    this.task = this.$todo_input.value;
    console.log("salope : ", this.task);

    todoStore.todos.push({
      task: this.task,
      state: true,
    });
    console.log(todoStore.getTodos());
  }

  renderForm() {
    this.innerHTML = /* HTML */ ` <form class="todo_form">
      <input
        type="text"
        id="todo_input"
        placeholder="Ajouter une tache"
        requiered
      />
      <button type="submit" id="todo_add_btn">+</button>
    </form>`;
  }
}

customElements.define("todo-form", TodoForm);
