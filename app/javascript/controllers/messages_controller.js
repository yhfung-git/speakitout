import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="messages"
export default class extends Controller {
  connect() {
  }

  activate() {
    console.log("Messages controller activated")
  }
}
