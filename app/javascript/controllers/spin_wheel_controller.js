import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="spin-wheel"
export default class extends Controller {
  static targets = ["container", "insert1", "insert2", "insert3", "insert4", "insert5", "insert6", "insert7", "insert8", "input1", "input2", "input3", "input4", "input5", "input6", "input7", "input8"]

  connect() {
    console.log("Spin Wheel Connected");
  }

  spin () {
    let number = Math.ceil(Math.random() * 3000);
    this.containerTarget.style.transform = "rotate(" + number + "deg)";
    number += Math.ceil(Math.random() * 3000);
  }

  update () {
    const one = this.input1Target.value;
    const two = this.input2Target.value;
    const three = this.input3Target.value;
    const four = this.input4Target.value;
    const five = this.input5Target.value;
    const six = this.input6Target.value;
    const seven = this.input7Target.value;
    const eight = this.input8Target.value;
    this.input1Target
    this.insert1Target.innerHTML= one
    this.input2Target
    this.insert2Target.innerHTML= two
    this.input3Target
    this.insert3Target.innerHTML= three
    this.input4Target
    this.insert4Target.innerHTML= four
    this.input5Target
    this.insert5Target.innerHTML= five
    this.input6Target
    this.insert6Target.innerHTML= six
    this.input7Target
    this.insert7Target.innerHTML= seven
    this.input8Target
    this.insert8Target.innerHTML= eight
  }
}
// let container = document.querySelector(".spin-wheel");
// let btn = document.getElementById("spin");
// let number = Math.ceil(Math.random() * 1000);

// btn.onclick = function () {
// 	container.style.transform = "rotate(" + number + "deg)";
// 	number += Math.ceil(Math.random() * 1000);
// }
