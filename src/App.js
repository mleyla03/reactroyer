import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { Routes } from "./routes/routes";
const route=createBrowserRouter(Routes)

function App() {
  return (
   <>

    <RouterProvider router={route}></RouterProvider>
   </>
  )
}

export default App;
