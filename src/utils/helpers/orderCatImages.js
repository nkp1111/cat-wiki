import breeds from '../constants/topBreed'

const orderCatImages = (images) => {
  // reorder images according to rank
  let orderImage = breeds.map(item => item.id)

  images?.map(item => {
    if (item[0]) {
      orderImage[orderImage.indexOf(item[0].breeds[0].id)] = item[0].url
    }
  })

  return orderImage
}

export default orderCatImages