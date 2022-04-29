// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { fetcher } from '@/lib/apiRequest'

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  if (typeof process.env.NEXT_PUBLIC_API_URL_ROOT === 'undefined') return

  const data = await fetcher(process.env.NEXT_PUBLIC_API_URL_ROOT)
  res.end(JSON.stringify(data))
}

export default handler
