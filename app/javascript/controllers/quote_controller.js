import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "output" ]

  connect() {
    fetch("https://api.api-ninjas.com/v1/quotes?category=happiness", {
      method: "GET",
      headers: {
        "X-Api-Key": "1qhQB9s28LvR3ZUiAMfxPw==Mm12nonKkjJXIQ4I",
      },
      contentType: 'application/json',
    }) 
      .then(response => response.json())
      .then(data => {
        this.outputTarget.innerHTML = data[0].quote
      })
      .catch(error => console.log(error))
  }
}
