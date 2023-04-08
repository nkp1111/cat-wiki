import React from 'react'

const index = () => {
  return (
    <div className='main__form-breed'>
      <form className='d-flex'>
        <input type="text" placeholder='Enter your breed' />
        Search Icon
      </form>

      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="cat-breeds" data-bs-toggle="dropdown" aria-expanded="false">
          Breeds
        </button>
        <ul class="dropdown-menu" aria-labelledby="cat-breeds">
          {["breed1", "breed2"].map(item => (
            <li key={item}><a class="dropdown-item" href="#">{item}</a></li>
          ))}
        </ul>
      </div>

    </div>
  )
}

export default index
