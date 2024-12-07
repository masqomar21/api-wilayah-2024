# Wilayah API Documentation

This document outlines the API endpoints for fetching regional data (province, city, subdistrict, and village) using the provided endpoints.

## Base URL

local development server URL:

```
http://localhost:3000
```

## Endpoints

### 1. Get Provinsi

Retrieve a list of provinces.

**Endpoint:**

```http
GET /wilayah/provinsi
```

**Request Example:**

```http
GET http://localhost:3000/wilayah/provinsi
```

**Response Example:**

```json
{
  {
  "status": 200,
  "message": "Success",
  "data": [
    {
      "id": 1,
      "name": "Provisi A",
      "code": "00"
    },
    {
      "id": 2,
      "name": "Provinsi B",
      "code": "00"
    }
  ]
  }
}
```

---

### 2. Get Kabupaten

Retrieve a list of regencies (kabupaten) within a specific province.

**Endpoint:**

```http
GET /wilayah/kabupaten/{provinsi_id}
```

**Path Parameters:**

- `provinsi_id`: ID of the province.

**Request Example:**

```http
GET http://localhost:3000/wilayah/kabupaten/19
```

**Response Example:**

```json
{
  {
  "status": 200,
  "message": "Success",
  "data": [
    {
      "id": 57,
      "type": "Kota",
      "name": "Kota A",
      "code": "00",
      "full_code": "1900",
      "provinsi_id": 19
    },
    {
      "id": 264,
      "type": "Kabupaten",
      "name": "Kabumaten B",
      "code": "01",
      "full_code": "1901",
      "provinsi_id": 19
    },
  ]
  }
}
```

---

### 3. Get Kecamatan

Retrieve a list of subdistricts (kecamatan) within a specific regency.

**Endpoint:**

```http
GET /wilayah/kecamatan/{kabupaten_id}
```

**Path Parameters:**

- `kabupaten_id`: ID of the regency.

**Request Example:**

```http
GET http://localhost:3000/wilayah/kecamatan/314
```

**Response Example:**

```json
{
  {
  "status": 200,
  "message": "Success",
  "data": [
   {
      "id": 258,
      "name": "Kecamatan A",
      "code": "00",
      "full_code": "180000",
      "kabupaten_id": 314
    },
    {
      "id": 667,
      "name": "Kecamatan B",
      "code": "01",
      "full_code": "180001",
      "kabupaten_id": 314
    }
  ]
  }
}
```

---

### 4. Get Kelurahan

Retrieve a list of villages (kelurahan) within a specific subdistrict.

**Endpoint:**

```http
GET /wilayah/kelurahan/{kecamatan_id}
```

**Path Parameters:**

- `kecamatan_id`: ID of the subdistrict.

**Request Example:**

```http
GET http://localhost:3000/wilayah/kelurahan/6362
```

**Response Example:**

```json
{
  {
  "status": 200,
  "message": "Success",
  "data": [
    {
      "id": 15260,
      "name": "Kelurahan A",
      "code": "0000",
      "full_code": "1804110000",
      "pos_code": "34865",
      "kecamatan_id": 6362
    },
    {
      "id": 15265,
      "name": "Kelurahan B",
      "code": "0003",
      "full_code": "1804110003",
      "pos_code": "34868",
      "kecamatan_id": 6362
    },
  ]
  }
}
```

---

## Notes

- Replace `{provinsi_id}`, `{kabupaten_id}`, and `{kecamatan_id}` with the corresponding IDs when making requests.
- Ensure the API is running at the specified base URL before sending requests.
- The response format is JSON, containing the `id` and `name` of the entities.
