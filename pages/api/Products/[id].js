import { AllProducts } from "../Data";

export default function handler(req, res) {
  let id = req.query.id;
  let product = AllProducts.find((item) => item.id === id);
  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ err: "The is No Data" });
  }
}
