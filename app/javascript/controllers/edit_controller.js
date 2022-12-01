import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="edit"

export default class extends Controller {
  static targets = [ "content", "form"]

  connect() {
  }

  replace() {
    if (this.contentTarget.innerText) {
      let content = this.contentTarget.innerText
      this.contentTarget.innerHTML=`<form method='put' action='${window.location.pathname}' ><textarea style='height: ${this.contentTarget.offsetHeight}px'class="form-edit" data-edit-target='form' name="post[content]"></textarea><input type="submit" value="confirm"/>`
      this.formTarget.addEventListener('input', autoResize);
      this.formTarget.value = content
      function autoResize() {
        this.style.height = 'auto';
        this.style.height = this.scrollHeight + 'px';
      }
      this.formTarget.style.overflow = "hidden"
    }
  }
}

