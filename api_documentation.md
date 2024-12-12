# Wilayah API Documentation

This document outlines the API endpoints for fetching regional data (province, city, subdistrict, and village) using the provided endpoints.

## Base URL

**Development Server:**

```
http://localhost:3000
```

**Production Server:**

```
https://api-wliayah.vercel.app
```

## Endpoints

### 1. Get Provinces

Retrieve a list of provinces.

**Endpoint:**

```http
GET {{host}}/region/provinces
```

**Request Example:**

```http
GET http://localhost:3000/region/provinces
```

**Response Example:**

```json
{
  "status": 200,
  "message": "Success",
  "data": [
    {
      "id": 1,
      "name": "Province A",
      "code": "00"
    },
    {
      "id": 2,
      "name": "Province B",
      "code": "01"
    }
  ]
}
```

---

### 2. Get One Province

Retrieve details of a specific province.

**Endpoint:**

```http
GET {{host}}/region/province/{{provinsi_id}}
```

**Path Parameters:**

- `provinsi_id`: ID of the province.

**Request Example:**

```http
GET http://localhost:3000/region/province/19
```

**Response Example:**

```json
{
  "status": 200,
  "message": "Success",
  "data": {
    "id": 19,
    "name": "Province A",
    "code": "00"
  }
}
```

---

### 3. Get Regencies / Cities

Retrieve a list of regencies (kabupaten) within a specific province.

**Endpoint:**

```http
GET {{host}}/region/regencies/{{provinsi_id}}
```

**Path Parameters:**

- `provinsi_id`: ID of the province.

**Request Example:**

```http
GET http://localhost:3000/region/regencies/19
```

**Response Example:**

```json
{
  "status": 200,
  "message": "Success",
  "data": [
    {
      "id": 57,
      "type": "City",
      "name": "City A",
      "code": "00",
      "full_code": "1900",
      "provinsi_id": 19
    },
    {
      "id": 264,
      "type": "Regency",
      "name": "Regency B",
      "code": "01",
      "full_code": "1901",
      "provinsi_id": 19
    }
  ]
}
```

---

### 4. Get One Regency / City

Retrieve details of a specific regency or city.

**Endpoint:**

```http
GET {{host}}/region/regency/{{kabupaten_id}}
```

**Path Parameters:**

- `kabupaten_id`: ID of the regency or city.

**Request Example:**

```http
GET http://localhost:3000/region/regency/314
```

**Response Example:**

```json
{
  "status": 200,
  "message": "Success",
  "data": {
    "id": 314,
    "name": "City A",
    "type": "City",
    "code": "00",
    "full_code": "180000",
    "provinsi_id": 19
  }
}
```

---

### 5. Get Districts

Retrieve a list of districts (kecamatan) within a specific regency or city.

**Endpoint:**

```http
GET {{host}}/region/districts/{{kabupaten_id}}
```

**Path Parameters:**

- `kabupaten_id`: ID of the regency or city.

**Request Example:**

```http
GET http://localhost:3000/region/districts/314
```

**Response Example:**

```json
{
  "status": 200,
  "message": "Success",
  "data": [
    {
      "id": 258,
      "name": "District A",
      "code": "00",
      "full_code": "180000",
      "kabupaten_id": 314
    },
    {
      "id": 667,
      "name": "District B",
      "code": "01",
      "full_code": "180001",
      "kabupaten_id": 314
    }
  ]
}
```

---

### 6. Get One District

Retrieve details of a specific district (kecamatan).

**Endpoint:**

```http
GET {{host}}/region/district/{{kecamatan_id}}
```

**Path Parameters:**

- `kecamatan_id`: ID of the district.

**Request Example:**

```http
GET http://localhost:3000/region/district/6362
```

**Response Example:**

```json
{
  "status": 200,
  "message": "Success",
  "data": {
    "id": 6362,
    "name": "District A",
    "code": "0000",
    "full_code": "1804110000",
    "kabupaten_id": 314
  }
}
```

---

### 7. Get Villages

Retrieve a list of villages (kelurahan) within a specific district.

**Endpoint:**

```http
GET {{host}}/region/villages/{{kecamatan_id}}
```

**Path Parameters:**

- `kecamatan_id`: ID of the district.

**Request Example:**

```http
GET http://localhost:3000/region/villages/6362
```

**Response Example:**

```json
{
  "status": 200,
  "message": "Success",
  "data": [
    {
      "id": 15260,
      "name": "Village A",
      "code": "0000",
      "full_code": "1804110000",
      "pos_code": "34865",
      "kecamatan_id": 6362
    },
    {
      "id": 15265,
      "name": "Village B",
      "code": "0003",
      "full_code": "1804110003",
      "pos_code": "34868",
      "kecamatan_id": 6362
    }
  ]
}
```

---

### 8. Get One Village

Retrieve details of a specific village (kelurahan).

**Endpoint:**

```http
GET {{host}}/region/village/{{kelurahan_id}}
```

**Path Parameters:**

- `kelurahan_id`: ID of the village.

**Request Example:**

```http
GET http://localhost:3000/region/village/15260
```

**Response Example:**

```json
{
  "status": 200,
  "message": "Success",
  "data": {
    "id": 15260,
    "name": "Village A",
    "code": "0000",
    "full_code": "1804110000",
    "pos_code": "34865",
    "kecamatan_id": 6362
  }
}
```

---

## Notes

- Replace `{{host}}` with the appropriate base URL (`http://localhost:3000` for development or `https://api-wliayah.vercel.app` for production).
- Use the specified IDs in the endpoints to fetch targeted data.
- All responses are in JSON format.
