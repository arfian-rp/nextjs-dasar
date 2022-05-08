// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  method: string;
  data?: {};
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case "GET":
      res.status(200).json({ method: "get" });
      break;
    case "POST":
      res.status(200).json({ method: "post", data: req.body });
      break;
  }
}
