import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="hide"
export default class extends Controller {
  connect() {
  }

  activate(event) {
    event.preventDefault();
    let message = document.querySelector(".messages-container")
    if (message.style.visibility == "hidden") {
      message.style.visibility = "visible"
    }
    else {
      message.style.visibility = "hidden"
    }
  }
}


