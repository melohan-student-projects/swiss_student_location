import { test } from 'vitest';
import {expect} from "vitest";
import RealStateApi from "../src/services/realstate-api";

test('getCities', async () => {
    const api = new RealStateApi();
    const cities = await api.getCities();

    expect(cities).toBeDefined();
    expect(Array.isArray(cities)).toBe(true);
});
//test for the city name Laussane to be in the object using give when then
test('getCityByName', async () => {
    const api = new RealStateApi();
    const cities = await api.getCities();
    const city = cities.find(city => city.name === 'Lausanne');
    expect(city).toBeDefined();
    expect(city?.name).toBe('Lausanne');
});

//test for the city name Geneve to be in the object using give when then
test('getCityByName', async () => {
    const api = new RealStateApi();
    const cities = await api.getCities();
    const city = cities.find(city => city.name === 'Geneva');
    expect(city).toBeDefined();
    expect(city?.name).toBe('Geneva');
});
//test for the city name Ste-Croix and have canton Vaud to be in the object using give when then
test('getCityByName', async () => {
    const api = new RealStateApi();
    const cities = await api.getCities();
    const city = cities.find(city => city.name === 'Ste-Croix');
    expect(city).toBeDefined();
    expect(city?.name).toBe('Ste-Croix');
    expect(city?.canton).toBe('Vaud');
});

//test for the city by npa 1950 and city name to Sion in the object using give when then
test('getCityByNpa', async () => {
    const api = new RealStateApi();
    const cities = await api.getCities();
    const city = cities.find(city => city.npa === 1950);
    expect(city).toBeDefined();
    expect(city?.name).toBe('Sion');
    expect(city?.npa).toBe(1950);
});



