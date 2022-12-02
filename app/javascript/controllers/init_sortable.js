import Sortable from "sortablejs"

const list = document.querySelector("#myspace-cards")

const initSortable = () => {
  console.log("connected");
  Sortable.create(list, {
    ghostClass: "ghost",
    animation: 150,
  })
}

export { initSortable }
