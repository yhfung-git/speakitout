import Sortable from "sortablejs"


const initSortable = () => {
const list = document.querySelector("#myspace-cards")
  console.log("Connected");
  Sortable.create(list, {
    ghostClass: "ghost",
    animation: 150,
  })
}

export { initSortable }
