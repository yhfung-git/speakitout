import { Controller } from "@hotwired/stimulus"

let data

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
    /*ajax ({
      url: `/activities/${x}/mark_as_read`,
      type: 'put'
    });*/

    fetch(`conversations/${x}/mark_as_read`, {
      method: 'PUT',
      parameters: { id: x },
    })
    .then(response => response.json())
    .then((data) => {
      console.log("test")
      console.log(data)
    })
    .catch((error) => {
      console.log(error)
    })

    fetch(`conversations/${x}/messages`, {
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
    for (let i = 0; i < data.length; i++) {
      if (data[i].id !== null) {
        if (this.element.dataset.user == data[i].user_id) {
          this.outputTarget.insertAdjacentHTML('beforeend', `<div class="border rounded-4 my-3 ms-auto px-2" style="width: fit-content; background-color: #32D25A"><p style="display: inline-block; color: white">${data[i].body}</p></div>`)
        }
        else {
          this.outputTarget.insertAdjacentHTML('beforeend', `<div class="border rounded-4 my-3 me-auto px-2" style="width: fit-content; background-color: #38383A"><p style="display: inline-block; color: white">${data[i].body}</p></div>`)
        }
      }
    }
    let form = `
      <form action="http://localhost:3000/conversations/${data[0].conversation_id}/messages" data-insert-target="form" method="post" style="height: 20px;">
        <input type="text" name="body" class="border border-2 px-2" data-insert-target="text">
        <input value="${this.element.dataset.user}" type="hidden" name="user_id">
        <input type="submit" value="Send" style="width: 100%; height: fit-content">
      </form>
    `
    if (this.form_containerTarget.innerHTML == "\n    ") {
      this.form_containerTarget.insertAdjacentHTML('beforeend', form)
      this.selectForm();
    }
  }
}
