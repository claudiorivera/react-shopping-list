import Item from "../../../models/Item";
import dbConnect from "../../../util/dbConnect";

const handler = async (req, res) => {
  await dbConnect();
  switch (req.method) {
    case "GET":
      try {
        const items = await Item.find({});
        if (!items) return res.status(400).json({ success: false });
        res.status(200).json(items);
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const item = await Item.create(req.body);
        if (!item) return res.status(400).json({ success: false });
        res.status(201).json({ success: true, item });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;
