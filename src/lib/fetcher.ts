import axios from 'axios'

/**
 * @param {string} [url] API URL
 * @returns {Promise<TestApiResponseType[]>} API Response
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

/**
 * @param {string} [url] API URL
 * @param {object} [params] Request Body
 */
export const createPost = async (url: string, params: TestApiRequestType) => {
  const { title, content } = params
  const body = {
    title,
    content,
  }

  await axios.post(url, body, {
    headers: {
      'Content-Type': 'text/plain',
      'X-Api-Key': process.env.NEXT_PUBLIC_X_API_KEY as string,
    },
  })

  alert('create content!!')
}

/**
 * @param {string} [id] POST ID
 */
export const deletePost = async (url: string, id: string) => {
  await axios.delete(`${url}${id}`, {
    headers: {
      'X-Api-Key': process.env.NEXT_PUBLIC_X_API_KEY as string,
    },
  })

  alert('delete content!!')
}
