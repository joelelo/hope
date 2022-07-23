import connectDB from "../../lib/connectDB";
import Schedulemodel from "../../models/Schedulemodel";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]";
connectDB();

export default async function handler(req, res) {
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const schedule = await Schedulemodel.find({}).sort({ ind: 1 });
        res.status(200).json({ schedule: schedule });
      } catch (error) {
        res.status(500).json({ error: error });
      }

      break;
    case "POST":
      const session = await unstable_getServerSession(req, res, authOptions);
      if (session) {
        try {
          req.body.map(async (line, i) => {
            await Schedulemodel.updateMany(
              { ind: line[0].content },
              { ind: line[0].content, schedule: line },
              { upsert: true }
            );
          });
          res.status(200).json({ message: "Successful" });
        } catch (error) {
          res.status(500).json({ error: error });
        }
      } else {
        res.status(401).json({ error: "unauthorized" });
      }

      break;
  }
}
