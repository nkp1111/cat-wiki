import React from 'react'

const RatingPlaceholder = ({ n }) => {
  return (
    <span className='d-flex col-9'>
      {["", "", "", "", ""].map((item, ind) => (
        <span className={`placeholder ${ind + 1 <= n ? "active" : ""}`}
          key={ind} />
      ))}
    </span>
  )
}

export default RatingPlaceholder
