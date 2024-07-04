import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CreatePost, { createAction } from './components/CreatePost.jsx';
import PostList, { Fetcher } from './components/PostList.jsx';
let router=createBrowserRouter([
  {path:"/",element:<App/> ,children:[
    {path:"/" , element:<PostList/> , loader:Fetcher},
    {path:"/create-post" , element:<CreatePost/> , action:createAction}
  ]},
  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
