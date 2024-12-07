import dotenv from "dotenv";
import bodyParser from "body-parser";
import express from "express";
import {
  getCity,
  getDistrict,
  getProvice,
  getVillage,
} from "./helper/getWilayah";
import { type Request, type Response } from "express-serve-static-core";
import { responseFormater } from "./helper/respose.Formater";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();
app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) => {
  const responseData = responseFormater(
    200,
    "Success",
    "API Wilayah Indonesia"
  );
  res.status(200).json(responseData);
});

app.get("/wilayah/provinsi", async (req: Request, res: Response) => {
  const data = await getProvice();
  res.json(responseFormater(200, "Success", data));
});

app.get("/wilayah/kabupaten/:prov_id", async (req: Request, res: Response) => {
  const { prov_id } = req.params;
  const data = await getCity(prov_id);
  res.json(responseFormater(200, "Success", data));
});

app.get("/wilayah/kecamatan/:kab_id", async (req: Request, res: Response) => {
  const { kab_id } = req.params;
  const data = await getDistrict(kab_id);
  res.json(responseFormater(200, "Success", data));
});

app.get("/wilayah/kelurahan/:kec_id", async (req: Request, res: Response) => {
  const { kec_id } = req.params;
  const data = await getVillage(kec_id);
  res.json(responseFormater(200, "Success", data));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
