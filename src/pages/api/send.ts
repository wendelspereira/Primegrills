import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../utils/mongodb'

const buyList = []

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const buy = { ...req.body }
        const { method } = req

        buy.status = 'PENDING'
        buyList.push(buy)

        if (method === "POST") {
            const { db } = await connectToDatabase()
            const response = await db.collection("pendingOrders").insertMany([buy])
            res.status(200).json(response);
        } else {
            res.status(405).end(`Method ${method} Not Allowed`);
        }
    } catch (err) {
        res.status(500).json({ statusCode: 500, message: err.message });
    }
}
