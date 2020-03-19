import express from "express";
import { getName } from "country-list";
import Twitter from "../models/twitter";

const router = express.Router();

router.get("/api/tweets", async ({ ipInfo }, res) => {
  try {
    const API = new Twitter();
    const data = await API.getTweetsByCountry(getName(ipInfo.country));
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
