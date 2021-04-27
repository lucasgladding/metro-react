import React from 'react';

interface LoaderProps {
  loading: boolean;
  error: Error | undefined;
}

const Loader: React.FC<LoaderProps> = ({ children, error, loading }) => {
  if (loading) {
    return (
      <div>Loading...</div>
    );
  }
  if (error) {
    return (
      <div>{error.message}</div>
    );
  }
  return (
    <div>{children}</div>
  );
}

export default Loader;
