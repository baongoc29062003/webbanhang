import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './Cart.css'
import {DeleteOutlined } from '@ant-design/icons'
import {deleteItem,clearAll,updateQuantity} from '../../cartSlice'

export const Cart = () => {
    const toralItemCart = useSelector((state) => state.cart.cartTotal.length)
    const thanhTien = useSelector((state) => state.cart.totalAmount)
    const cartItem = useSelector((state) => state.cart.cartTotal)
    const dispatch = useDispatch()

    const del =(index) => {
        console.log('Deleting item at index:', index);
        dispatch(deleteItem(index))
    }   

    const handleClearAll = () => {
        dispatch(clearAll());
    };

    const handleQuantityChange = (title, quantity) => {
        // Chỉ cập nhật khi quantity là một số hợp lệ
        if (quantity > 0) {
          dispatch(updateQuantity({ title, quantity }));
        }
      };
    console.log('Cart Items:', cartItem);
    console.log('Total Amount:', thanhTien);
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
                                <th>Số lượng</th>
                                <th><button onClick={() => handleClearAll()} >Xoá tất cả</button></th>
                            </tr>
                        </thead>
                        <tbody>
                        {cartItem.map((item,index) => (
                            
                            <tr key={index}>
                                <td><img src={item.img1} alt="" /> </td>
                                <td>{item.title}
                                </td>
                                <td>{item.price}</td>
                                <td> <input
                             type="number"
                             value={item.quantity || 0}
                             min="1"
                             onChange={(e) => handleQuantityChange(item.title, parseInt(e.target.value, 10))}
                    /></td>
                                <td><span onClick={() => del(index)}><DeleteOutlined /></span></td>
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