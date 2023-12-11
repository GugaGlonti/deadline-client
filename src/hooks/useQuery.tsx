import { useMemo } from 'react';
import { useLocation } from 'react-router';

export default function useQueryParam(query: string) {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]).get(query);
}
