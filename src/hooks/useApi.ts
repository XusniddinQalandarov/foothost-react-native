import { useState, useCallback } from 'react';

export interface ApiResponse<T> {
  data?: T;
  error?: string;
  loading: boolean;
}

export const useApi = <T>() => {
  const [state, setState] = useState<ApiResponse<T>>({
    loading: false,
  });

  const execute = useCallback(
    async (apiCall: () => Promise<T>): Promise<T | null> => {
      setState({ loading: true });
      
      try {
        const data = await apiCall();
        setState({ data, loading: false });
        return data;
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An error occurred';
        setState({ error: errorMessage, loading: false });
        return null;
      }
    },
    []
  );

  const reset = useCallback(() => {
    setState({ loading: false });
  }, []);

  return {
    ...state,
    execute,
    reset,
  };
}; 