import { Controller } from "@hotwired/stimulus"
  
let i = 0;

// Connects to data-controller="hide"
export default class extends Controller {
  connect() {

  }

  activate(event) {
    event.preventDefault();
    let close = document.querySelector(".close-msg")
    let message = document.querySelector(".messages-container")
    close.addEventListener("click", (event) => {
      message.style.visibility = "hidden"
    })

    if (message.style.visibility == "hidden") {
      message.style.visibility = "visible"
    }
    else {
      message.style.visibility = "hidden"
    }
  }
}

/*
  form = document.querySelector(".form-messages")
form.addEventListener("submit", (event) => {
  console.log(this.notificationTarget.value)
})
  */ 
