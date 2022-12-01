import Sortable from "sortablejs"

const list = document.querySelector("#myspace-cards")

const initSortable = () => {
  Sortable.create(list, {
    ghostClass: "ghost",
    animation: 150,
  })
}

export { initSortable }
