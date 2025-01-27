import { useAuth } from '@clerk/clerk-react';
import { Navigate, useLocation } from 'react-router-dom';

export const ProtectedRoute = ({ children }) => {
  const { isLoaded, isSignedIn } = useAuth();
  const location = useLocation();

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!isSignedIn) {
    // Redirect to sign-in but save the attempted location
    return <Navigate to="/sign-in" state={{ from: location }} replace />;
  }

  return children;
}; 