import { NextApiRequest, NextApiResponse } from 'next';

import { ObjectId } from 'mongodb'

import { connectToDatabase } from '../../utils/mongodb'

export default async (req: NextApiRequest, res: NextApiResponse) => {

    try {
        if (req.method === 'GET') {
            const { db } = await connectToDatabase()
            const { id } = req.query
            const o_id = new ObjectId(String(id))
            const data = await db.collection('products').find({ "_id": o_id }).toArray()
            res.status(200).json(data[0])
        }
    } catch (err) {
        res.status(500).json({err: err, erro: "erro ao obter produto"})
    }
    

}

