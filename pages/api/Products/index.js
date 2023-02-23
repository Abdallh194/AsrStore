import { AllProducts } from "../Data";

export default function handler(req, res) {
  res.status(200).json(AllProducts);
}
