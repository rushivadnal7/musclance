import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import UserAuth from './pages/UserAuth'


function App() {
  const route = createBrowserRouter([
    {
      path: '/',
      element: <UserAuth />
    }
  ])

  return (
    <div className="App text-white">
      <RouterProvider router={route} />
    </div>
  )
}

export default App
