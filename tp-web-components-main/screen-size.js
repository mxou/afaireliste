class ScreenSize extends HTMLElement {
  connectedCallback() {
    this.toggle = true;

    this.attachShadow({ mode: "open" });

    this.shadowRoot.innerHTML = /*HTML*/ `
    <style>
      .screenSize_container {
        position: fixed;
        top: 5px;
        right: 5px;
        width: 200px;
        height: 40px;
        background: rgba(255, 255, 255, 0.3);
        border: 5px double #ffcc00;
        border-radius: 30px;
        padding: 5px;
        box-shadow: 0 0 30px rgba(255, 0, 255, 1), 0 0 50px rgba(0, 255, 255, 0.5);
      }

      .screenSize_size {
        display: inline-block;
        font-size: 1.2rem;
        color: #000;
        margin: 0;
      }

      .screenSize_btn {
        margin-left: 10px;
        background-color: #ffcc00;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        padding: 5px 10px;
        color: #000;
      }

      .screenSize_btn:hover {
        background-color: #ffb300;
      }
    </style>
    
    <div class="screenSize_container">
      <p class="screenSize_size"></p>
      <button class="screenSize_btn">Switch</button>
    </div>`;

    this.$size = this.shadowRoot.querySelector(".screenSize_size");
    this.$btn = this.shadowRoot.querySelector(".screenSize_btn");

    this.calcSize();

    this.$btn.addEventListener("click", () => {
      this.toggle = !this.toggle;
      this.calcSize();
    });

    window.addEventListener("resize", () => this.calcSize());
  }

  calcSize() {
    const windowWidth = window.innerWidth;
    this.$size.innerHTML = this.toggle
      ? windowWidth + " px"
      : (
          windowWidth /
          parseInt(
            getComputedStyle(document.body).getPropertyValue("font-size")
          )
        ).toFixed(2) + " rem";
  }
}

customElements.define("screen-size", ScreenSize);
