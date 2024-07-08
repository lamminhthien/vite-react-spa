import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthState } from '../states/auth.state';
import AuthenticatedLayout from '../../../layouts/authenticated.layout';
import { useLocale } from 'use-intl';

const PrivateRoute: React.FC = () => {
  const locale = useLocale();
  const { isAuthenticated } = useAuthState();

  return isAuthenticated ? (
    <AuthenticatedLayout>
      <Outlet />
    </AuthenticatedLayout>
  ) : (
    <Navigate to={`/${locale}/login`} replace />
  );
};

export default PrivateRoute;
