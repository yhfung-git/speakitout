import Sortable from "sortablejs"

const list = document.querySelector("#myspace-cards")

const initSortable = () => {
  console.log("Connected");
  Sortable.create(list, {
    ghostClass: "ghost",
    animation: 150,
  })
}

export { initSortable }
