import {useState} from 'react'

const Product = (props) => {

  let [isAvailable, setIsAvailable] = useState("Available")

  return (
    <div className="product">
        <img className='img' src={props.url} alt="product_img" />
        <h2>{props.ProductName}</h2>
        <p>{props.price}</p>
        <h4>{isAvailable}</h4>
        <button onClick={() => {setIsAvailable("Not Available")}} className='btn'>Click Me</button>
    </div>
  )
}

export default Product