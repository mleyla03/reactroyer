
import User from "../pages/User/User"
import Employes from "../pages/User/Employes"
import AdminPanel from "../pages/User/AdminPanel"
import Home from "../pages/User/Home"
import Admin from "../pages/Admin/Admin"
import AddEmployes from "../pages/Admin/AddEmployes"
import MainSite from "../pages/Admin/MainSite"
import Employe from "../pages/Admin/Employes"

import NotFound from "../pages/User/NotFound"
import Basket from "../pages/User/Basket"
import ProducrDetetail from "../pages/User/ProdocutDetail"
import EditProduct from "../pages/Admin/EditProduct"
export const Routes=[
    {
     path:"/",
     element:<User/>,
     children:
     [
      {
        path:"",
        element:<Home/>
      },
      {
        path:"employes",
        element:<Employes/>
      },
      {
        path:"admin",
        element:<AdminPanel/>
      },
      {
        path:"*",
        element:<NotFound/>
      },
      {
        path:"basket",
        element:<Basket/>
      },
      {
        path:"employes/:id",
        element:<ProducrDetetail/>
      },
   

     ]
    },
    {
        path:"/admin",
        element:<Admin/>,
        children:
        [
            {
                path:"",
                element:<MainSite/>
            },
            {
                path:"employe",
                element:<Employe/>
            },
            {
                path:"addemploye",
                element:<AddEmployes/>
            },
           
            {
              path:"employe/edit/:id",
              element:<EditProduct/>
            }

        ]
    }
  
]