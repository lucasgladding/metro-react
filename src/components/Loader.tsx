import React from 'react';

interface LoaderProps {
  loading: boolean;
  error?: Error | undefined;
}

const Loader: React.FC<LoaderProps> = ({ children, error, loading }) => {
  if (loading) {
    return (
      <div data-testid="loading-text">Loading...</div>
    );
  }
  if (error) {
    return (
      <div data-testid="error-text">{error.message}</div>
    );
  }
  return (
    <div>{children}</div>
  );
}

export default Loader;
