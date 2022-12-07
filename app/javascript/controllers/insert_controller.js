import { Controller } from "@hotwired/stimulus"

let data

// Connects to data-controller="insert"
export default class extends Controller {
  static targets = [ "output", "link", "form", "input" ]

  connect() {
    this.formTarget.addEventListener("submit", (event) => {
      setTimeout(() => {
      this.send(event)
      }, 250)
    })
  }

  send(event) {
    event.preventDefault();
    console.log(event.target.parentElement)
    let x = event.target.parentElement.dataset.test
    if (typeof x == 'string') {
      data = x
    }
    else {
      x = data
    }
    console.log(x)
    fetch(`http://localhost:3000/conversations/${x}/messages`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
    })
      .then(response => response.json())
      .then((data) => {
        console.log(data)
        this.setMessages(data);
      })
      .catch((error) => {
        console.log(error)
      })
  }

  setMessages(data) {
    this.outputTarget.innerHTML = "";
    console.log(this.outputTarget.innerHTML)
    for (let i = 0; i < data.length; i++) {
      if (this.element.dataset.user == data[i].user_id) {
        this.outputTarget.insertAdjacentHTML('beforeend', `<div class="border rounded-4 my-3 ms-auto px-2" style="width: fit-content; background-color: #32D25A"><p style="display: inline-block; color: white">${data[i].body}</p></div>`)
      }
      else {
        this.outputTarget.insertAdjacentHTML('beforeend', `<div class="border rounded-4 my-3 me-auto px-2" style="width: fit-content; background-color: #38383A"><p style="display: inline-block; color: white">${data[i].body}</p></div>`)
      }
    }
    this.formTarget.action = `http://localhost:3000/conversations/${data[0].conversation_id}/messages`
    this.inputTarget.value = `${this.element.dataset.user}`
  }
}
