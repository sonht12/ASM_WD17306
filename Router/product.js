import express from "express";
import { Create,GetAll, GetOne, Update, } from "../controllers/products";
const router = express.Router();

router.get("/product", GetAll);
router.get("/product/:id", GetOne);
router.post("/product/",Create);
router.put("/product/:id",Update);

export default router;
