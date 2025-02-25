import fs from "fs";
import path from "path";

const getProviceByCode = async (code: string) => {
  console.log("code", code, typeof code);
  const filePath = path.resolve(process.cwd(), "wilayah_data/provinsi.json");
  const data = fs.readFileSync(filePath, "utf8");
  const parsedData = JSON.parse(data);
  return parsedData.find((province: any) => province.code == code);
};

const getCityByFullCode = async (full_code: string) => {
  const filePath = path.resolve(process.cwd(), "wilayah_data/kabupaten.json");
  const data = fs.readFileSync(filePath, "utf8");
  const parsedData = JSON.parse(data);
  return parsedData.find((city: any) => city.full_code == full_code);
};

const getDistrictByFullCode = async (full_code: string) => {
  const filePath = path.resolve(process.cwd(), "wilayah_data/kecamatan.json");
  const data = fs.readFileSync(filePath, "utf8");
  const parsedData = JSON.parse(data);
  return parsedData.find((district: any) => district.full_code == full_code);
};

const getVillageByFullCode = async (full_code: string) => {
  const filePath = path.resolve(process.cwd(), "wilayah_data/kelurahan.json");
  const data = fs.readFileSync(filePath, "utf8");
  const parsedData = JSON.parse(data);
  return parsedData.find((village: any) => village.full_code == full_code);
};

const getwilayahByCode = async (code: string) => {
  const provinceCode = code.substring(0, 2);
  const cityCode = code.substring(2, 4);
  const districtCode = code.substring(4, 7);
  const villageCode = code.substring(7, 10);

  const province = await getProviceByCode(provinceCode);
  const city = await getCityByFullCode(provinceCode + cityCode);
  const district = await getDistrictByFullCode(
    provinceCode + cityCode + districtCode
  );
  const village = await getVillageByFullCode(
    provinceCode + cityCode + districtCode + villageCode
  );

  return {
    province,
    city,
    district,
    village,
  };
};

const getListCityByProvinceCode = async (provinceCode: string) => {
  const filePath = path.resolve(process.cwd(), "wilayah_data/kabupaten.json");
  const data = fs.readFileSync(filePath, "utf8");
  const parsedData = JSON.parse(data);
  return parsedData.filter((city: any) =>
    city.full_code.startsWith(provinceCode)
  );
};

const getListDistrictByCityCode = async (full_cityCode: string) => {
  const filePath = path.resolve(process.cwd(), "wilayah_data/kecamatan.json");
  const data = fs.readFileSync(filePath, "utf8");
  const parsedData = JSON.parse(data);
  return parsedData.filter((district: any) =>
    district.full_code.startsWith(full_cityCode)
  );
};

const getListVillageByDistrictCode = async (full_districtCode: string) => {
  const filePath = path.resolve(process.cwd(), "wilayah_data/kelurahan.json");
  const data = fs.readFileSync(filePath, "utf8");
  const parsedData = JSON.parse(data);
  return parsedData.filter((village: any) =>
    village.full_code.startsWith(full_districtCode)
  );
};

export {
  getProviceByCode,
  getCityByFullCode,
  getDistrictByFullCode,
  getVillageByFullCode,
  getwilayahByCode,
  getListCityByProvinceCode,
  getListDistrictByCityCode,
  getListVillageByDistrictCode,
};
