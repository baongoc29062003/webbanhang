import './Footer.css'
import logo from '../../assets/logo.webp'
import {PhoneFilled,CompassOutlined,HomeFilled,TruckFilled,MailFilled,DropboxSquareFilled} from "@ant-design/icons"
export const Footer = () => {
return(
    <>
    <div className='footer'>
    <div className='footer1'>
        <img src={logo} alt="" />
        <ul>
            <li><span> <DropboxSquareFilled /> </span>Ship COD toàn quốc </li>
            <li><span> <TruckFilled/> FREESHIP đơn hàng từ 500.000đ</span> </li>

        </ul>
    </div>
    <div className='footer2'>
        <p>LIÊN HỆ</p>
        <ul>
            <li><span> <HomeFilled/> CLOWN STORE</span></li>
            <li><span> <MailFilled/> hbna3bc@gmail.com</span></li>
            <li><span> <CompassOutlined /> 19 Hồ Đắc Di, Đống Đa</span> </li>
            <li><span> <PhoneFilled/> SDT : 0980123456</span></li>
        </ul>
    </div>
    <div className='footer3'>
        <p>CHÍNH SÁCH</p>
        <ul>
            <li>CHÍNH SÁCH ĐỔI TRẢ</li>
            <li>CHÍNH SÁCH THÀNH VIÊN</li>
            <li>CHÍNH SÁCH VẬN CHUYỂN</li>
        </ul>
    </div>
    <div className='footer4'>
    <p>ĐĂNG KÝ NHẬN TIN</p>
    <ul>
        <li>Nhận thông tin sản phẩm mới nhất, tin khuyến mãi và nhiều hơn nữa.</li>
    </ul>
    </div>
    </div>
    

    </>
)

}