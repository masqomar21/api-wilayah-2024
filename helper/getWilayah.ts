import fs from "fs";
import path from "path";

const getProvice = async () => {
  const filePath = path.resolve(process.cwd(), "wilayah_data/provinsi.json");
  const data = fs.readFileSync(filePath, "utf8");
  return JSON.parse(data);
};

const getCity = async (provinceId: string) => {
  const filePath = path.resolve(process.cwd(), "wilayah_data/kabupaten.json");
  const data = fs.readFileSync(filePath, "utf8");
  const parsedData = JSON.parse(data);
  return parsedData.filter((city: any) => city.provinsi_id == provinceId);
};

const getDistrict = async (cityId: string) => {
  const filePath = path.resolve(process.cwd(), "wilayah_data/kecamatan.json");
  const data = fs.readFileSync(filePath, "utf8");
  const parsedData = JSON.parse(data);
  return parsedData.filter((district: any) => district.kabupaten_id == cityId);
};

const getVillage = async (districtId: string) => {
  const filePath = path.resolve(process.cwd(), "wilayah_data/kelurahan.json");
  const data = fs.readFileSync(filePath, "utf8");
  const parsedData = JSON.parse(data);
  return parsedData.filter(
    (village: any) => village.kecamatan_id == districtId
  );
};

export { getProvice, getCity, getDistrict, getVillage };
