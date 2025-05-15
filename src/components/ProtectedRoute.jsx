import { Navigate } from 'react-router-dom'
import { useMountain } from './MountainContext' 

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated } = useMountain()
  
  return isAuthenticated ? element : <Navigate to="/login" replace />
}

export default ProtectedRoute