import { useEffect, useState } from 'react'
import './ListTop.css'
import axios from 'axios'
import { Skeleton } from 'antd';
import { Link } from 'react-router-dom';
import {useApi} from '../ApiContext';


export const ListTop = ({api, endpoint}) => {
    const { setApiEndpoint } = useApi();
    const [listProduct,setListProduct]= useState([])
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setApiEndpoint(api);

        axios.get(api + endpoint).then((response) => {

            setListProduct(response.data)
            setLoading(false);
        });
    }, [api, endpoint]);

    if (loading) {
        return <Skeleton active />;  // Hiển thị skeleton khi đang tải dữ liệu
      }
    
    return(
        <>
            <div className='top-container'>

                {
                   listProduct.length > 0 ? listProduct.map((item) => (
                    <Link to = {`/detail/${endpoint}/${item.id}`} key={item.id}>
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