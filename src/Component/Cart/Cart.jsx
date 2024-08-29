import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './Cart.css'
import {DeleteOutlined } from '@ant-design/icons'
import {deleteItem,clearAll} from '../../cartSlice'

export const Cart = () => {
    const toralItemCart = useSelector((state) => state.cart.cartTotal.length)
    const thanhTien = useSelector((state) => state.cart.totalAmount)

    const cartItem = useSelector((state) => state.cart.cartTotal)
    const dispatch = useDispatch()

    const del =(index) => {
        dispatch(deleteItem(index))
    }   

    const handleClearAll = () => {
        dispatch(clearAll());
    };
    return (
        <>
            <div className="title">
                <h1>GIỎ HÀNG</h1>
                <p>( {toralItemCart} sản phẩm)</p>
            </div>
            <div className="cart-container">
                <div className='listCart'>
                    <table>
                        <thead>
                            <tr>
                                <th>Sản phẩm</th>
                                <th>Tên sản phẩm</th>
                                <th>Đơn giá</th>
                                <th><button onClick={() => handleClearAll()} >Xoá tất cả</button></th>
                            </tr>
                        </thead>
                        <tbody>
                        {cartItem.map((cartItem) => (
                            
                            <tr>
                                <td><img src={cartItem.img1} alt="" /> </td>
                                <td>{cartItem.title}</td>
                                <td>{cartItem.price}</td>
                                <td><span onClick={() => del()}><DeleteOutlined /></span></td>
                            </tr>
                        
                        ))}
                        </tbody>
                        


                    </table>
                </div>
                <div className='total'>
                    <div>
                        <p>Tạm tính:
                        </p>
                        <p>{thanhTien}.000đ</p>
                    </div>
                    <div>
                    <p>Thành tiền:</p>
                    <h1>{thanhTien}.000đ</h1>
                    </div>
                    <button>THANH TOÁN NGAY</button>
                    <br />
                    <Link to='/'><button>TIẾP TỤC MUA HÀNG</button></Link>
                    
                </div>
            </div>

        </>
    )
}