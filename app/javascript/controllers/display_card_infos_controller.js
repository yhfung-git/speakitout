import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="display-card-infos"
export default class extends Controller {
  static targets = [ "card", "article" ]

  connect() {
    console.log("Connected");
  }

  displayCard () {
    this.cardTarget.classList.toggle("d-block")
    this.articleTarget.classList.toggle("display")
  }
}
