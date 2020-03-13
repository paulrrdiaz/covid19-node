import express from "express";
import { getName, getData } from "country-list";
import Corona from "../models/corona";

const router = express.Router();

router.get("/api/countries", async (req, res) => {
  try {
    const API = new Corona();
    const data = await API.countries();
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/api/total", async ({ ipInfo }, res) => {
  try {
    const API = new Corona();
    const data = await API.total();
    const response =
      process.env.NODE_ENV !== "development" ? data : { ...data, country: getName(ipInfo.country) };

    res.send(response);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
