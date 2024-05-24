import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router.jsx'
import AuthProvider from './components/utils/AuthProvider.jsx'

function App() {
  return (
    <>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    </>
  )
}

export default App
