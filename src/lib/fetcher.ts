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
      // 'X-Api-Key': process.env.NEXT_PUBLIC_X_API_KEY as string,
    },
  })

  alert('create complete!!')
}

/**
 * @param {string} [url] API URL
 */
export const deletePost = async (url: string) => {
  await axios.delete(`${url}`, {
    headers: {
      // 'X-Api-Key': process.env.NEXT_PUBLIC_X_API_KEY as string,
    },
  })

  alert('delete complete!!')
}

/**
 * @param {string} [url] API URL
 * @param {object} [params] Request Body
 */
export const editPost = async (url: string, params: TestApiRequestType) => {
  const { title, content } = params
  const body = {
    title,
    content,
  }
  await axios.patch(`${url}`, body, {
    headers: {
      // 'X-Api-Key': process.env.NEXT_PUBLIC_X_API_KEY as string,
    },
  })

  alert('edit complete!!')
}
