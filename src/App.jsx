import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from './pages/RootLayout'
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Pricing from './pages/Pricing'


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "blog", element: <Blog /> },
      { path: "blog/need-for-breakdown-cover", element: <BlogPost /> },
      { path: "pricing", element: <Pricing /> },
    ],
  },
])


function App() {
  return <RouterProvider router={router} />;
}

export default App;