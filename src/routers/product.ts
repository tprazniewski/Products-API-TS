import { Router } from "express/";
import {
  getProduct,
  getAllProducts,
  addProduct,
  deleteProduct,
  updateProduct,
} from "../controllers/product";
import { createValidator, updateValidator } from "../utils/productValdiator";
const router = Router();

router.get("/:id", getProduct);
router.get("/", getAllProducts);
router.post("/", createValidator, addProduct);
router.delete("/:id", deleteProduct);
router.put("/", updateValidator, updateProduct);

export default router;
