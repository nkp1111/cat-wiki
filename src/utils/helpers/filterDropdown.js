const filterDropdownItem = (term) => {
  // filter dropdown list item, hide not-searched breeds and returning required breed id
  let targetBreed
  const breedItems = document.querySelectorAll(".dropdown-item")
  breedItems.forEach(breed => {
    if (!breed.textContent.toLowerCase().match(term.toLowerCase())) {
      breed.style.display = "none"
    } else {
      breed.style.display = "block"
    }

    if (breed.textContent.toLowerCase() === term.toLowerCase()) {
      targetBreed = breed.classList[1]
    }
  })

  return targetBreed
}

export default filterDropdownItem