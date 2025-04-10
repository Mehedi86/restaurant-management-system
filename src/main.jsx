import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Route.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='container mx-auto'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  </StrictMode>,
)
