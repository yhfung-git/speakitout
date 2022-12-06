import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="insert"
export default class extends Controller {
  static targets = [ "output", "link", "form", "input" ]

  connect() {
  }

  send(event) {
    event.preventDefault();
    fetch(`http://localhost:3000/conversations/${event.target.parentElement.dataset.test}/messages`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
    })
      .then(response => response.json())
      .then((data) => {
        this.setMessages(data);
      })
      .catch((error) => {
        console.log(error)
      })
  }

  setMessages(data) {
    this.outputTarget.innerHTML = "";
    for (let i = 0; i < data.length - 1; i++) {
      console.log(data[i])
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
