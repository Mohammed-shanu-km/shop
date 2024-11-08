import React from 'react'
import { Link } from 'react-router-dom'
import './Productherosection.css'

const Producthero = () => {
  return (
    <div className="product-herosection">
    <div className="px-[100px] py-[100px] sm-max:px-[20px] sm-max:py-[20px]">
      <div className="flex flex-col  mt-[80px]">
        <h1 className="text-[45px] text-[white] font-[600] sm-max:text-[32px]">
          Products
        </h1>
        <Link to={"/"}>
          <h2 className="text-[20px] text-[white] sm-max:text-[16px]">
            Home/Products
          </h2>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default Producthero