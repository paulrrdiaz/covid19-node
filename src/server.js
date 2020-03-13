import path from "path";
import express from "express";
import cors from "cors";
import expressIp from "express-ip";
import routers from "./routers";

const app = express();
const port = process.env.PORT || 5000;

// app.use(cors());
app.use(express.json());
app.use(expressIp().getIpInfoMiddleware);
app.use(cors({ origin: "*" }));

app.use(routers);

app.get("/", (req, res) => {
  res.send({
    developer: "Paul Diaz Navarrete",
    linkedin: "https://www.linkedin.com/in/paulrrdiaz/",
    portfolio: "https://pauls.world",
  });
});

app.get("*", (req, res) => {
  res.sendStatus(404);
});

app.listen(port, () => {
  console.log(`Running at port ${port}`);
});
