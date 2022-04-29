import axios from 'axios'

const headers = {
  headers: {
    'X-Api-Key': process.env.NEXT_PUBLIC_X_API_KEY as string,
  },
}

/**
 * CREATE
 * @param {string} [url] API URL
 * @param {object} [params] Request Body
 */
export const createPost = async (url: string, params: TestApiRequestType) => {
  const { title, content } = params

  const date = new Date().getTime()

  const body = {
    title,
    content,
    date,
  }

  await axios.post(url, body, headers)

  alert('create complete!!')
}

/**
 * READ
 * @param {string} [url] API URL
 * @returns {Promise<TestApiResponseType[]>} API Response
 */
export const fetcher = async (url: string): Promise<TestApiResponseType[]> => {
  const response = await axios.get(url, headers)

  return (await response.data) as TestApiResponseType[]
}

/**
 * UPDATE
 * @param {string} [url] API URL
 * @param {object} [params] Request Body
 */
export const editPost = async (url: string, params: TestApiRequestType) => {
  const { title, content } = params
  const body = {
    title,
    content,
  }
  await axios.patch(`${url}`, body, headers)

  alert('edit complete!!')
}

/**
 * DELETE
 * @param {string} [url] API URL
 */
export const deletePost = async (url: string) => {
  await axios.delete(url, headers)
  alert('delete complete!!')
}
