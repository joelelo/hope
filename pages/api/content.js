import connectDB from "../../lib/connectDB";
import Contentmodel from "../../models/Contentmodel";
connectDB();
export default async function (req, res) {
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const contents = await Contentmodel.find({}).sort({ index: 1 });
        res.status(200).json({ contents: contents });
      } catch (error) {
        res.status(500).json({ error: error });
      }
      break;
    case "POST":
      try {
        const deleteIfMore = async (len) => {
          const count = await Contentmodel.count({});
          console.log(count, len);
          if (count > len) {
            await Contentmodel.findOneAndRemove({ index: count - 1 });
          }
          if (count - len > 1) {
            deleteIfMore(len);
          }
        };
        deleteIfMore(req.body.length);
        req.body.map(async (cont, i) => {
          await Contentmodel.updateMany({ index: i }, cont, {
            upsert: true,
          });
        });
        res.status(200).json({ message: "Success" });
      } catch (error) {
        res.status(500).json({ error: error });
      }
      break;
  }
}
