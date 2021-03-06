import React from 'react';

type Callback<T = any> = () => Promise<T>

const useLoad = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<Error | undefined>(undefined);

  async function load<T = any>(cb: Callback<T>): Promise<T | undefined> {
    try {
      setLoading(true);
      setError(undefined);
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

export default useLoad;
