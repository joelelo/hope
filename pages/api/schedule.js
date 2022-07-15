import connectDB from "../../lib/connectDB";
import schedulemodel from "../../models/schedulemodel";
connectDB();

export default async function handler(req, res) {
  const { method } = req;
  console.log(method);
  switch (method) {
    case "GET":
      const schedule = await schedulemodel.find();
      res.status(200).json({ schedule: schedule });
      break;
    case "POST":
      await schedulemodel.create(req.body);
      // await schedulemodel.updateMany({}, req.body, { upsert: true });
      res.status(200).json({});
      break;
  }
}
