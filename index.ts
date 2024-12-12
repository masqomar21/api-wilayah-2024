import dotenv from "dotenv";
import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import {
  getCity,
  getCityById,
  getDistrict,
  getDistrictById,
  getProvice,
  getProviceById,
  getVillage,
  getVillageById,
} from "./helper/getWilayah";
import { type Request, type Response } from "express-serve-static-core";
import { responseFormater } from "./helper/respose.Formater";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) => {
  const responseData = responseFormater(200, "Success", {
    message: "Welcome to Indonesia Region API",
    documentation:
      "https://github.com/masqomar21/api-wilayah-2024/blob/main/api_documentation.md",
  });
  res.status(200).json(responseData);
});

app.get("/region/provincies", async (req: Request, res: Response) => {
  const data = await getProvice();
  res.json(responseFormater(200, "Success", data));
});

app.get("/region/province/:prov_id", async (req: Request, res: Response) => {
  const { prov_id } = req.params;
  const data = await getProviceById(prov_id);

  if (data) {
    res.json(responseFormater(200, "Success", data));
  } else {
    res.json(responseFormater(404, "Data not found", null));
  }
});

app.get("/region/regencies/:prov_id", async (req: Request, res: Response) => {
  const { prov_id } = req.params;
  const data = await getCity(prov_id);
  res.json(responseFormater(200, "Success", data));
});

app.get("/region/regency/:kab_id", async (req: Request, res: Response) => {
  const { kab_id } = req.params;
  const data = await getCityById(kab_id);

  if (data) {
    res.json(responseFormater(200, "Success", data));
  } else {
    res.json(responseFormater(404, "Data not found", null));
  }
});

app.get("/region/districts/:kab_id", async (req: Request, res: Response) => {
  const { kab_id } = req.params;
  const data = await getDistrict(kab_id);
  res.json(responseFormater(200, "Success", data));
});

app.get("/region/district/:kec_id", async (req: Request, res: Response) => {
  const { kec_id } = req.params;
  const data = await getDistrictById(kec_id);

  if (data) {
    res.json(responseFormater(200, "Success", data));
  } else {
    res.json(responseFormater(404, "Data not found", null));
  }
});

app.get("/region/villages/:kec_id", async (req: Request, res: Response) => {
  const { kec_id } = req.params;
  const data = await getVillage(kec_id);
  res.json(responseFormater(200, "Success", data));
});

app.get("/region/village/:kel_id", async (req: Request, res: Response) => {
  const { kel_id } = req.params;
  const data = await getVillageById(kel_id);

  if (data) {
    res.json(responseFormater(200, "Success", data));
  } else {
    res.json(responseFormater(404, "Data not found", null));
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
