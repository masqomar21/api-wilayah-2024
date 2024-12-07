import fs from "fs";

const getProvice = async () => {
  const data = fs.readFileSync("./wilayah_data/provinsi.json", "utf8");

  return JSON.parse(data);
};

const getCity = async (provinceId: string) => {
  const data = fs.readFileSync("./wilayah_data/kabupaten.json", "utf8");
  const parsedData = JSON.parse(data);

  return parsedData.filter((city: any) => city.provinsi_id == provinceId);
};

const getDistrict = async (cityId: string) => {
  const data = fs.readFileSync("./wilayah_data/kecamatan.json", "utf8");
  const parsedData = JSON.parse(data);

  return parsedData.filter((district: any) => district.kabupaten_id == cityId);
};

const getVillage = async (districtId: string) => {
  const data = fs.readFileSync("./wilayah_data/kelurahan.json", "utf8");
  const parsedData = JSON.parse(data);

  return parsedData.filter(
    (village: any) => village.kecamatan_id == districtId
  );
};

export { getProvice, getCity, getDistrict, getVillage };
