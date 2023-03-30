import { test } from 'vitest';
import {expect} from "vitest";
import RealStateApi from "../src/services/realstate-api";
[ {
    "id": 1,
    "advertisement": {
      "contact": "jane.doe@example.com",
      "ad_date": "02-03-2023",
      "real_estate_date": "01-05-2023",
      "author": "COGESTIM SA"
    },
    "address": {
      "canton": "Vaud",
      "zip": "1450",
      "city": "Sainte-Croix",
      "street": "Rue du Midi",
      "postcode": "8"
    },
    "coordinates": {
      "longitude": "41.40338",
      "latitude": " 2.17403"
    },
    "rental_properties": {
      "status": "available",
      "availability_date": "01-05-2023",
      "type": "studio",
      "description": "Les charges comprennent 50CHF pour l'abonnement internet et la TV.",
      "surface": 25.0,
      "rooms": 1.5,
      "furnished": true,
      "rent": 700,
      "charges": 200,
      "flat_sharing": false,
      "kitchen_equipped": true,
      "bathroom_private": true,
      "laundry": true,
      "internet": true,
      "balcony": true,
      "celler": true,
      "pets": true,
      "accessibility": true,
      "airconditioning": true,
      "parking_available": true,
      "parking_rent": 100
    },
    "photos": [
      "/src/assets/images/photos/apartment1_1.jpg",
      "/src/assets/images/photos/apartment1_2.jpg",
      "/src/assets/images/photos/apartment1_3.jpg",
      "/src/assets/images/photos/apartment1_4.jpg",
      "/src/assets/images/photos/apartment1_5.jpg"
    ]
  }]

test('getRealStates', async () => {
    const api = new RealStateApi();
    const realStates = await api.getRealStates();

    expect(realStates).toBeDefined();
    expect(Array.isArray(realStates)).toBe(true);
});

test('getRealStateById', async () => {
    const api = new RealStateApi();
    const id = 1;
    const realState = await api.getRealStateById(id);

    expect(realState).toBeDefined();
    expect(typeof realState).toBe('object');
    expect(realState.id).toBe(id);
});

//test for the realstate id 1 to be in the object using give when then
test('getRealStateById', async () => {
    const api = new RealStateApi();
    const id = 1;
    const realState = await api.getRealStateById(id);

    expect(realState).toBeDefined();
    expect(typeof realState).toBe('object');
    expect(realState.id).toBe(id);
});
//test for the realstate id 2 to be in the object using give when then
test('getRealStateById', async () => {
    const api = new RealStateApi();
    const id = 2;
    const realState = await api.getRealStateById(id);

    expect(realState).toBeDefined();
    expect(typeof realState).toBe('object');
    expect(realState.id).toBe(id);
});