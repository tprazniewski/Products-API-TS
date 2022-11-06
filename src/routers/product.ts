import { Router } from "express/";
import {
  getProduct,
  getAllProducts,
  addProduct,
  deleteProduct,
  updateProduct,
} from "../controllers/product";
const router = Router();

router.get("/:id", getProduct);
router.get("/", getAllProducts);
router.post("/", addProduct);
router.delete("/:id", deleteProduct);
router.patch("/", updateProduct);

export default router;
