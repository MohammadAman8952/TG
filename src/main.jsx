import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Content from './components/Content/Content.jsx'
import Member from './components/Members/Member.jsx'
import About from './components/AboutUs/About.jsx'
import FunnyVideos from './components/FunnyVideos/FunnyVideos.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Content />
      },
      {
        path: 'about',
        element: <About/>
      },
      {
        path: 'tg-members',
        element: <Member />
      },
      { path: '/funny-videos', element: <FunnyVideos /> }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
