import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="spin-wheel"
export default class extends Controller {
  static targets = ["container"]

  connect() {
    console.log("Spin Wheel Connected");
  }

  spin () {
    let number = Math.ceil(Math.random() * 3000);
    this.containerTarget.style.transform = "rotate(" + number + "deg)";
    number += Math.ceil(Math.random() * 3000);
  }
}
// let container = document.querySelector(".spin-wheel");
// let btn = document.getElementById("spin");
// let number = Math.ceil(Math.random() * 1000);

// btn.onclick = function () {
// 	container.style.transform = "rotate(" + number + "deg)";
// 	number += Math.ceil(Math.random() * 1000);
// }
