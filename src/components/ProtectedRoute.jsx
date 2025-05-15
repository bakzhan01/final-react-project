import { Navigate } from 'react-router-dom'
import { useMountains } from './MountainContext'

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useMountains()
  
  return isAuthenticated ? children : <Navigate to="/login"/>
}

export default ProtectedRoute