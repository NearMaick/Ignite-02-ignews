import { NextApiRequest, NextApiResponse } from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {
  console.log(request.query)

  const users = [
    { id: 1, name: 'Maick' },
    { id: 2, name: 'Neuza' },
    { id: 3, name: 'Enilda' }
  ]

  return response.json(users)
}