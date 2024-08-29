import { Header } from "../Header/Header"
import { TrangChu } from "../Main/Trangchu"
import {Footer } from "../Footer/Footer"
import {createBrowserRouter, RouterProvider,Outlet} from 'react-router-dom';
import {ListTop} from '../TopPage/ListTop'
import { ProductDetail } from "../Detail/ProductDetail";
import {ApiProvider} from '../ApiContext'
import ErrorPage from "../ErrorPage/ErrorPage";
import { Cart } from "../Cart/Cart";


const apiEndPoint ='https://66c15ceaf83fffcb58792b70.mockapi.io/baongoc03/';
const apiEndPoint2 = 'https://66cd86d78ca9aa6c8ccaa7e6.mockapi.io/baongoc03/';
const accessory ='accessory';
const endpoint ="product"
const boottom = "chitiet"
const routerHome = createBrowserRouter([
{
    path:'/',
    element: (
        <>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
        </>
    ),
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            path: '/',
            element: <TrangChu></TrangChu>,
        },
        {
            path: '/Top',
            element: <ListTop api={apiEndPoint} endpoint ={endpoint}></ListTop>
        },
        {
            path:'/Bottom',
            element: <ListTop api={apiEndPoint} endpoint ={boottom}></ListTop>
        },
        {
            path: '/detail/:endpoint/:productId',
            element: <ProductDetail api = {apiEndPoint}></ProductDetail>,
        },
        {
            path:'/Accessory',
            element: <ListTop api={apiEndPoint2} endpoint ={accessory}></ListTop>
        },
        {
            path:'/Cart',
            element: <Cart></Cart>
        }
        
    ]
},


]);


export const HomePage = () => {
    return (
        <>
        <ApiProvider>
            <RouterProvider router={routerHome} />
        </ApiProvider>
            
        </>
    )
}