import slider_1 from'./TrangChuIMG/slider_1.webp';
import slider_story_1 from'./TrangChuIMG/slider_story_1.webp';
import top from './TrangChuIMG/top.webp';
import bottomjpg from './TrangChuIMG/bottomjpg.webp';
import accessory from './TrangChuIMG/accessory.webp';
import './TrangChu.css';
import { Link, Outlet } from 'react-router-dom'

const slider2 = [
    {srcimg : top, src:"/Top"},
    {srcimg : bottomjpg, src:"/Bottom"},
    {srcimg : accessory, src:"/Accessory"},
]

export const TrangChu =() => {
    return(
        <>
        
        <div className="banner1">
            <img src={slider_1} alt="" />
        </div>
        
        <div className='slider'>
            {
                slider2.map((item) => (
                    <Link to={item.src}> <div><img src= {item.srcimg} alt="" /></div></Link>
                    

                    
                ))
            }

                
        </div>
        <div className='banner2'>
        <img src={slider_story_1} alt="" />
        </div>
        </>
    )
}