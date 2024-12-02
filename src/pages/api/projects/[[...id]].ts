// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { retrieveData, retrieveDataById } from "@/lib/firebase/service";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { id }: any = req.query;

    if (id && id[0]) {
      const response = await retrieveDataById("projects", id[0]);
      if (response) {
        res.status(200).json({
          statusCode: 200,
          message: "Success get home",
          data: response,
        });
      } else {
        res.status(404).json({
          statusCode: 404,
          message: "Not Found",
        });
      }
    } else {
      const response = await retrieveData("projects");
      if (response) {
        res.status(200).json({
          statusCode: 200,
          message: "Success get home",
          data: response,
        });
      } else {
        res.status(404).json({
          statusCode: 404,
          message: "Not Found",
        });
      }
      res.status(404).json({
        statusCode: 404,
        message: "Not Found",
      });
    }
  } else {
    res.status(405).json({
      statusCode: 405,
      message: "Method Not Allowed",
    });
  }
}
