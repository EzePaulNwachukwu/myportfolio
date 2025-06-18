import React from 'react'

function Skillsprops({ image, skill }) {
  return (
    <div className=' px-1 py-4 my-4 col'  style={{ backgroundColor: "#475889", borderRadius: "10px",  }}>
      <div className='text-center text-white  '>
        <img style={{ width: '60px', textAlign: "center" }} src={image} alt="" />
        <h4 style={{ textAlign: 'center', marginTop: "10px" }}>{skill}</h4>
      </div>
    </div>
  )
}

export default Skillsprops