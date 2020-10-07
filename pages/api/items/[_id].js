import Item from "../../../models/Item";
import dbConnect from "../../../util/dbConnect";

const handler = async (req, res) => {
  await dbConnect();
  switch (req.method) {
    case "GET":
      try {
        const item = await Item.findById(req.query._id);
        if (!item) return res.status(400).json({ success: false });
        res.status(200).json(item);
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "PUT":
      try {
        const item = await Item.findOneAndUpdate(req.query._id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!item) return res.status(400).json({ success: false });
        res.status(200).json(item);
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "DELETE":
      try {
        const item = await Item.findOneAndDelete({ _id: req.query._id });
        if (!item) return res.status(400).json({ success: false });
        res.status(200).json({ success: true, item });
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
