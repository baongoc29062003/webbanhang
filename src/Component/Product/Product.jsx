import './ListProduct.css'
import { Link } from 'react-router-dom';
export const Product =({product}) => {
    return(
        <>
        <div className='top-container'>

        {
           product.length > 0 ? product.map((item) => (
            <Link to = {`/detail/${item.id}`} key={item.id}>
                <div className='top-cart' key={item.id}>
                <div className="images">
                <div className="image">
                < img src={item.img1} alt="not found"/> 
                <img className="first" src={item.img2} alt="not found"/>
                </div>
                </div>
                <div className='top-info'>
                <p>{item.price} ₫</p>
                <h2>{item.title}</h2>
                </div>   
                </div>
                </Link>
            )) : <Skeleton/>
           
        }
        </div>
        </>
    )
}