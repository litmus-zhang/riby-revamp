import type { NextApiRequest, NextApiResponse } from 'next'
const Airtable = require('airtable')
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_ID,
)

export default async function NewEmail(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { Email } = req.body
  try {
    base('Main').create(
      {
        Email: Email,
      },
      function (err: any, record: any) {
        if (err) {
          console.error(err)
          return
        }
        return res.status(200).json(record.fields)
      },
    )
  } catch (error) {
    console.error(error)
    res.status(500).json({ msg: 'Something went wrong! 😕' })
  }
}
