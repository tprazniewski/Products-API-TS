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
router.get("/", addProduct);
router.get("/", deleteProduct);
router.get("/", updateProduct);

export default router;
