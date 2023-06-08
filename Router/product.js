import express from "express";
import { GetAll, GetOne} from "../controllers/product";
const router = express.Router();
router.get("/product", GetAll);
router.get("/product/:id", GetOne);


export default router;
