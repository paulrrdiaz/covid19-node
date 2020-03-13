import express from "express";
import coronaRouter from "./corona";

const router = express.Router();

router.all("*", coronaRouter);

export default router;
