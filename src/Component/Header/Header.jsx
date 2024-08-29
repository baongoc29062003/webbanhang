import logo from '../../assets/logo.webp'
import {PhoneFilled,ShoppingCartOutlined,UserOutlined,CompassOutlined} from "@ant-design/icons"
import './header.css'
import {menuHome} from './listMenu'
import { Link, Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'


export const Header = () => {
    const toralItemCart = useSelector((state) => state.cart.cartTotal.length)
    useEffect(() => {
        const nav = document.getElementById('nav');
    
        const handleScroll = () => {
          if (window.scrollY > 100) {
            nav.style.position = 'fixed';
            nav.classList.add('tofixed');
          } else {
            nav.style.position = 'relative';
            nav.classList.remove('tofixed');
          }
        };
        
        

        window.addEventListener('scroll', handleScroll);
    
        // Cleanup function to remove event listener
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return(
        <>
        <div className='header-container' id = "nav">
        <div className='menu1'>
            <ul className='left'>
                <li><span><PhoneFilled />SDT : 0980123456</span></li>
                <li><span><CompassOutlined /> ĐỊA CHỈ : VIỆT NAM</span> </li>
            </ul>
            <div className='logo'>
                <div> <img src ={logo}/></div>
            </div>
            
            <ul className='right'>
                <li><span><UserOutlined /> TÀI KHOẢN</span></li>
                <Link to = "/Cart"><li><span> GIỎ HÀNG <ShoppingCartOutlined /> </span><span className='toral'>{toralItemCart}</span> </li></Link>
                
            </ul>

        </div>

        <div className='menu2'>
            <ul>
            {menuHome.map((item) => (
               <Link to = {item.src} key={item.id} ><li>{item.name}</li></Link>
            ))
            }
            </ul>
        
            
        </div>
        </div>
        
        </>
    )
}