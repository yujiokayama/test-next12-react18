import axios from 'axios'
/**
 * @description
 * useSWR のパラメータなどで使用する。
 * @param {string} [url] API URL
 * @returns {Promise<TestApiResponseType[]>} API レスポンス
 */
export const fetcher = async (url: string): Promise<TestApiResponseType[]> => {
  const response = await axios.get(url, {
    headers: {
      'Content-Type': 'application/json',
      'X-Api-Key': process.env.NEXT_PUBLIC_X_API_KEY as string,
    },
  })

  return (await response.data) as TestApiResponseType[]
}
