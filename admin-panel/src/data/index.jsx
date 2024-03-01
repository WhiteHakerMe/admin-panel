import {
    UserOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';
import { Product } from '../pages';


export const menuData = [
    {
        key: '1',
        icon: <UserOutlined />,
        label: 'Product',
        path: '/'
    },
    {
        key: '2',
        icon: <VideoCameraOutlined />,
        label: 'Orders',
        path: '/orders'
    }
]

export const routersData = [
    {
        id: 0,
        element: <Product />,
        path: '/'
    },
    {
        id: 1,
        element: <Orders />,
        path: '/orders'
    }
]