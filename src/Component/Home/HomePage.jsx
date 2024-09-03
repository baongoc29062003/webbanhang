import { Header } from "../Header/Header"
import { TrangChu } from "../Main/Trangchu"
import {Footer } from "../Footer/Footer"
import {createBrowserRouter, RouterProvider,Outlet} from 'react-router-dom';
import {ListProduct} from '../Product/ListProduct'
import { ProductDetail } from "../Detail/ProductDetail";
import {ApiProvider} from '../ApiContext'
import ErrorPage from "../ErrorPage/ErrorPage";
import { Cart } from "../Cart/Cart";


const apiEndPoint ='https://66c15ceaf83fffcb58792b70.mockapi.io/baongoc03/';
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
            element: <ListProduct api={apiEndPoint} danhmuc="1"></ListProduct>
        },
        {
            path:'/Bottom',
            element: <ListProduct api={apiEndPoint} danhmuc ="2"></ListProduct>
        },
        {
            path: '/detail/:productId',
            element: <ProductDetail api = {apiEndPoint}></ProductDetail>,
        },
        {
            path:'/Accessory',
            element: <ListProduct api={apiEndPoint} danhmuc ="3"></ListProduct>
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