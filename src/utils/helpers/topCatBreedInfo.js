import topCatBreeds from '../constants/topBreed'

const getTopBreedInfo = () => {
  // get top cat breeds name and max 10 images
  const topBreedCats = []
  const catapiBaseUrl = "https://api.thecatapi.com/v1/"
  const apiKey = process.env.REACT_APP_CAT_API_KEY
  topCatBreeds.forEach(item => {
    const catBreedImage = `images/search?limit=10&breed_ids=${item.id}&api_key=${apiKey}`
    fetch(catapiBaseUrl + catBreedImage)
      .then(res => res.json())
      .then(data => {
        topBreedCats.push({
          ...item,
          images: data
        })
      })
      .catch(err => {
        console.log(err)
      })
  })

  return topBreedCats
}

export default getTopBreedInfo