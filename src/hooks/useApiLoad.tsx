import React from 'react';

type Callback<T = any> = () => Promise<T | undefined>

const useApiLoad = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<Error | undefined>(undefined);

  async function load<T = any>(cb: Callback<T>): Promise<T | undefined> {
    try {
      setLoading(true);
      const response = await cb();
      setLoading(false);
      return response;
    } catch(error) {
      setLoading(false);
      setError(error);
    }
    return undefined;
  };

  return { load, loading, error };
};

export default useApiLoad;
