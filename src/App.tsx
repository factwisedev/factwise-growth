import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './routing/routes'

function App() {

  return (
  //  <HomePage/>

   <RouterProvider router={router}></RouterProvider>
  )
}

export default App
