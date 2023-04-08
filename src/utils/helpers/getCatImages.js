const getCatImages = async (breedId, n = 1) => {
  // get cat image acc. to breed
  const apiKey = process.env.REACT_APP_CAT_API_KEY
  const catapiBaseUrl = "https://api.thecatapi.com/v1/"
  const catBreedImage = `images/search?breed_ids=${breedId}&limit=${n}&api_key=${apiKey}`

  try {
    const res = await fetch(catapiBaseUrl + catBreedImage)
    const data = await res.json()
    return data
  } catch (err) {
    console.log(err)
  }

}


export default getCatImages