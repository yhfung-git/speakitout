import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="display-card-infos"
export default class extends Controller {
  static targets = [ "card" ]

  connect() {
    console.log("Connected");
  }

  displayCard () {
    this.cardTarget.classList.toggle("d-block")
  }
}
