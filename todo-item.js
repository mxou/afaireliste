class TodoItem extends HTMLElement {
  connectedCallback() {
    this.renderTodo();

    this.$todo_text = this.querySelector(".todo_text");
    this.$todo_checkbox = this.querySelector(".todo_checkbox");
    this.$todo_edit = this.querySelector(".todo_edit");
    this.$todo_delete = this.querySelector(".todo_delete");
  }

  attributeChangedCallback() {}

  disconnectedCallback() {}

  renderTodo() {
    this.innerHTML = /* HTML */ ` <div class="todo">
      <input type="checkbox" class="todo_checkbox" />
      <p class="todo_text"></p>
      <button class="todo_edit todo_btn"></button>
      <button class="todo_delete todo_btn"></button>
    </div>`;
  }
}

customElements.define("todo-item", TodoItem);
