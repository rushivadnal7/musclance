import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import UserAuth from './pages/UserAuth'
import SignIn from './pages/SignIn'


function App() {
  const route = createBrowserRouter([
    {
      path: '/',
      element: <UserAuth />
    },
    {
      path: '/signin',
      element: <SignIn/>
    },

    
  ])

  return (
    <div className="App text-white">
      <RouterProvider router={route} />
    </div>
  )
}

export default App
