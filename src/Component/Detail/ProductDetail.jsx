import './ProductDetail.css'
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import{useApi} from '../ApiContext'
import { useDispatch } from 'react-redux';
import {addCart} from '../../cartSlice';


export const ProductDetail = ({api}) => {
    let {productId} = useParams();
    const [product,setProduct] = useState([]);
    const dispath = useDispatch();
    const addToCart = () => {
        dispath(addCart(product));
        
    }

    
    useEffect(() => {
        setProduct([]);
    const fetchProduct = async () => {
        try {
            const response = await axios.get(`${api}/product/${productId}`);
            console.log(response.data);
            setProduct(response.data);
        } catch (err) {
            console.error('Lỗi khi lấy dữ liệu sản phẩm:', err);
        }
    };
    fetchProduct();
    },[productId]);
    const [slideIndex, setSlideIndex] = useState(1);
    const totalSlides = 3;

    const showSlides = (n) => {
        if (n > totalSlides) { setSlideIndex(1); }
        else if (n < 1) { setSlideIndex(totalSlides); }
        else { setSlideIndex(n); }
    };

    const nextSlide = () => {
        setSlideIndex(prevIndex => (prevIndex % totalSlides) + 1);
    };

    const prevSlide = () => {
        setSlideIndex(prevIndex => (prevIndex - 2 + totalSlides) % totalSlides + 1);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000); // Chuyển slide mỗi 3 giây
        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    

    return (
        <>
            <div className="detail-container">
                <div className="detailImg">
                    <div className="slideshow-container">
                        <div className={`mySlides fade ${slideIndex === 1 ? 'active' : ''}`}>
                            <img src={product?.img1} alt="Slide 1" />
                        </div>
                        <div className={`mySlides fade ${slideIndex === 2 ? 'active' : ''}`}>
                            <img src={product?.img2} alt="Slide 2" />
                        </div>
                        <div className={`mySlides fade ${slideIndex === 3 ? 'active' : ''}`}>
                            <img src={product?.img3} />
                        </div>

                        <div id="btnController">
                            <button type="button" className="prev" onClick={prevSlide}>&#10094;</button>
                            <button type="button" className="next" onClick={nextSlide}>&#10095;</button>
                        </div>

                        <div id="btnDot">
                            <span className={`dot ${slideIndex === 1 ? 'active' : ''}`} onClick={() => showSlides(1)}></span>
                            <span className={`dot ${slideIndex === 2 ? 'active' : ''}`} onClick={() => showSlides(2)}></span>
                            <span className={`dot ${slideIndex === 3 ? 'active' : ''}`} onClick={() => showSlides(3)}></span>
                        </div>
                    </div>
                </div>
                <div className='detailInfo'>
                    <h1>{product?.title}</h1>
                    <h2>Mô tả</h2>
                    <p>
                    {product?.mota}
                    </p>
                    <p>Chất liệu: {product?.chatlieu} </p>
                    <p>Form dáng : {product?.form} </p>
                    <img src={product?.imgsize} alt="" />
                    <h1>{product?.price}₫</h1>
                    <div>
                    <button onClick={()=> addToCart()}>Thêm vào giỏ hàng</button>
                    <Link to ='/Cart'><button >Xem giỏ hàng</button></Link>
                  
                    </div>
                    
                </div>
            </div>
        </>
    )
}