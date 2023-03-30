import { test } from 'vitest';
import {expect} from "vitest";
import RealStateApi from "../src/services/realstate-api";

test('getCities_nominalCase_success', async () => {
    // given
    const api = new RealStateApi();

    // when
    const cities = await api.getCities();

    // then
    expect(cities).toBeDefined();
    expect(Array.isArray(cities)).toBe(true);
});

test('getCity_containsExpectedCity_success', async () => {
    // given
    const api = new RealStateApi();

    // when
    const cities = await api.getCities();
    const city = cities.find(city => city.name === 'Geneva');

    // then
    expect(city).toBeDefined();
    expect(city?.name).toBe('Geneva');
});

test('getCities_containsExpectedCity_success', async () => {
    // given
    const api = new RealStateApi();

    // when
    const cities = await api.getCities();
    const city = cities.find(city => city.name === 'Ste-Croix');

    // then
    expect(city).toBeDefined();
    expect(city?.name).toBe('Ste-Croix');
    expect(city?.canton).toBe('Vaud');
});

test('getCities_containsExpectedNpa_success', async () => {
    // given
    const api = new RealStateApi();

    // when
    const cities = await api.getCities();
    const city = cities.find(city => city.npa === 1950);

    // then
    expect(city).toBeDefined();
    expect(city?.name).toBe('Sion');
    expect(city?.npa).toBe(1950);
});



