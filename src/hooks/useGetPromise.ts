import { useEffect, useState } from 'react';

export const useGetPromise = <T = any>(promise: Promise<T>) => {
  const [state, setState] = useState<T>();

  useEffect(() => {
    promise.then((value) => {
      setState(value);
    });
  }, [promise]);

  return state;
};
