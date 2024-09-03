import { useEffect, useState } from 'react'
import './ListTop.css'
import axios from 'axios'
import { Skeleton } from 'antd';
import { Link } from 'react-router-dom';
import {useApi} from '../ApiContext';
import {Product} from './Product'

export const ListTop = ({api, danhmuc}) => {
    const { setApiEndpoint } = useApi();
    const [listProduct,setListProduct]= useState([])
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setApiEndpoint(api);

        axios.get(api +`danhmuc/${danhmuc}/product`).then((response) => {

            setListProduct(response.data)
            setLoading(false);
        });
    }, [api, danhmuc]);

    if (loading) {
        return <Skeleton active />;  // Hiển thị skeleton khi đang tải dữ liệu
      }
    
    return(
        <>
            <Product product={listProduct}></Product>
        </>
    )
    
}