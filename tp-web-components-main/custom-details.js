class CustomDetails extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: "open" });
        const template = document.getElementById("custom-details").content;
        this.shadowRoot.appendChild(template.cloneNode(true));

        this.$details = this.shadowRoot.querySelector('details');

        this.shadowRoot.addEventListener('mouseover', () => {
        this.$details.toggleAttribute('open');
        });
        this.shadowRoot.addEventListener('mouseleave', () =>{
            this.$details.toggleAttribute('open');
        });

        this.shadowRoot.addEventListener('focus', () =>{
            this.$details.toggleAttribute('open');
        });

        this.shadowRoot.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
            this.$details.toggleAttribute('open');
            }
        });
    }
  
    attributeChangedCallback() {
     
    }
  
    disconnectedCallback() {
      
    }
  
    renderTitle() {
      
    }
  
    renderTime() {
     
    }
    
  }
  
  
  
  
  customElements.define("custom-details", CustomDetails);