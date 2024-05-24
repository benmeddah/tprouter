import { redirect } from "react-router-dom";
import ProductIndex from "./Index";
import AllProducts from "./views/AllProducts";
import EditProduct from "./views/EditProduct";
import OneProduct from "./views/OneProduct";
import AddProduct from "./views/AddProduct";

export default {
    
        path: "product",
        Component: ProductIndex,
        children : [
            {
                path :"/product",
                loader:()=>redirect('all'),
            },
            {
                path :"all",
                Component: AllProducts,
            },
            {
                path :"add",
                Component: AddProduct,
            },
            {
                path :":id",
                Component: OneProduct,
            },
            {
                path :":id/edit",
                Component: EditProduct,
            },
            {
                path :"*",
                element: <p>error 404, invalid url</p>,
            },
            
        ]
      
}