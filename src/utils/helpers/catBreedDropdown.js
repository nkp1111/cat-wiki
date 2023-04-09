const handleBreedDropDown = (type = "show") => {
  // show and hide breed dropdown
  const breedItem = document.querySelector(".dropdown-menu")

  if (type === "show" && !breedItem.classList.contains("show")) {
    breedItem.classList.add("show")
  }
  if (type === "hide" && breedItem.classList.contains("show")) {
    breedItem.classList.remove("show")
  }
}

export default handleBreedDropDown