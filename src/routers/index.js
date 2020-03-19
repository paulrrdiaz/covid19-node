import express from "express";
import coronaRouter from "./corona";
import twitterRouter from "./twitter";

const router = express.Router();

router.all("*", coronaRouter, twitterRouter);

export default router;
