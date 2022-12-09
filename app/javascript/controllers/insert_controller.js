import { Controller } from "@hotwired/stimulus"

let data
let host = window.location.origin

// Connects to data-controller="insert"
export default class extends Controller {
  static targets = [ "output", "link", "form", "form_container", "text" ]

  connect() {
  }

  selectForm() {
    this.formTarget.addEventListener("submit", (event) => {
      setTimeout(() => {
        this.textTarget.value = ""
        this.send(event)
      }, 250)
    })
  }

  send(event) {
    event.preventDefault();
    let x = event.target.parentElement.dataset.conv
    if (typeof x == 'string') {
      data = x
    }
    else {
      x = data
    }

    fetch(`${host}/conversations/${x}/mark_as_read`, {
      method: 'GET',
      parameters: { id: x },
    })
      .then(response => response.json())
      .then((data) => {
        console.log(data)
      })
      .catch((error) => {
      })

    fetch(`${host}/conversations/${x}/messages`, {
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
    data.sort(function(a, b) { 
      return a.id - b.id  ||  a.name.localeCompare(b.name);
    });
    this.outputTarget.innerHTML = "";
    for (let i = 0; i < data.length; i++) {
      if (data[i].id !== null) {
        if (this.element.dataset.user == data[i].user_id) {
          this.outputTarget.insertAdjacentHTML('beforeend', `<div class="border rounded-4 my-1 ms-auto px-2" style="width: fit-content; margin-right: 10%; background-color: #32D25A"><p style="display: inline-block; color: white">${data[i].body}</p></div>`)
        }
        else {
          this.outputTarget.insertAdjacentHTML('beforeend', `<div class="border rounded-4 my-1 me-auto px-2" style="width: fit-content; margin-left: 10%; background-color: #E5E4E9"><p style="display: inline-block">${data[i].body}</p></div>`)
        }
      }
    }
    this.outputTarget.scrollTop = this.outputTarget.scrollHeight;
    let form = `
      <form action="${host}/conversations/${data[0].conversation_id}/messages" class="d-flex justify-content-end position-relative" data-insert-target="form" method="post" style="bottom: 20px; height: 25px;">
        <input value="${this.element.dataset.user}" type="hidden" name="user_id">
          <input type="text" name="body" class="position-absolute border border-2 p-2 rounded-5" data-insert-target="text">
          <input type="submit" value="↑" class="submit position-absolute rounded-5" style="width: 25px; height: fit-content; background-color: #008952; color: white; ">
      </form>
      `
    if (this.form_containerTarget.childElementCount === 0) {
      this.form_containerTarget.insertAdjacentHTML('beforeend', form)
      this.selectForm();
    }
  }
}
