import Product from './Product'

const Products = () => {

    let products = [
        {id: 1, name: "Electronic Gadgets", price: 300000, url: 'https://www.91-cdn.com/hub/wp-content/uploads/2022/12/Apple-Products-expected-to-launch-in-2023.png'},
        {id: 2, name: "Edible Oil", price: 5000, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpuzdq4rGJQzUZwAEXGULjKyhn77eI_oCeaw&usqp=CAU'},
        {id: 3, name: "Hair Care Products", price: 2000, url: 'https://akm-img-a-in.tosshub.com/businesstoday/images/story/202103/hul_products660_090321092848.jpg?size=1200:675'},
        {id: 4, name: "TATA Products", price: 2500, url: 'https://bsmedia.business-standard.com/_media/bs/img/article/2021-02/23/full/1614090997-3035.jpg?im=FeatureCrop,size=(382,233)'}
    ]

  return (
    
    <div className='product_list'>

        {
            products.map((product) => {
                return (
                <Product ProductName={product.name} price={product.price} url={product.url} key={product.id}/>
                )
            })
        }
        
    </div>
  )
}

export default Products