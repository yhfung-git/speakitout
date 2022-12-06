import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "output", "close" ]

  connect() {
    fetch("https://api.api-ninjas.com/v1/quotes?category=happiness", {
      method: "GET",
      headers: {
        "X-Api-Key": "ZyMq5ZcYVZPJfue2i/i2CA==67SAwCkNEVE339ow",
      },
      contentType: 'application/json',
    })
      .then(response => response.json())
      .then(data => {
        this.outputTarget.innerHTML = data[0].quote
      })
      .catch(error => console.log(error))
  }

  close() {
    this.closeTarget.classList.add("d-none")
  }
}
