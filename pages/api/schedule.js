import connectDB from "../../lib/connectDB";
import schedulemodel from "../../models/schedulemodel";
connectDB();

export default async function handler(req, res) {
  const { method } = req;
  console.log(method);
  switch (method) {
    case "GET":
      try {
        const schedule = await schedulemodel.find();
        res.status(200).json({ schedule: schedule });
      } catch (error) {
        res.status(500).json({ error: error });
      }

      break;
    case "POST":
      try {
        req.body.map(async (line, i) => {
          await schedulemodel.updateMany(
            { ind: i },
            { ind: i, schedule: line },
            { upsert: true }
          );
        });
        res.status(200).json({ message: "Successful" });
      } catch (error) {
        res.status(500).json({ error: error });
      }

      break;
  }
}
