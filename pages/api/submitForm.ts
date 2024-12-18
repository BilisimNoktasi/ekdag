import { client } from "@/sanity/lib/client";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { nameSurname, email, message, phone } = req.body;

    try {
      const result = await client.create({
        _type: 'contact',
        nameSurname,
        email,
        phone,
        message,
      });

      res.status(200).json({ success: true, result });
    } catch (error) {
      res.status(500).json({ success: false, error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}