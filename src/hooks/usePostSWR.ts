import useSWR, { SWRResponse } from 'swr';
import { fetcher } from '@/lib/fetcher';

export const usePostSWR = (
  fallbackData: TestApiResponseType[]
): SWRResponse<TestApiResponseType[]> => {
  return useSWR(`api/posts`, fetcher, {
    fallbackData,
    refreshInterval: 0,
  });
};
