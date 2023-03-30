import { test } from 'vitest';
import {expect} from "vitest";
import RealEstateApi from "@services/ApiService";

test('getRealEstates_nominalCase_returnsArray', async () => {
    //given
    const api = new RealEstateApi();

    // when
    const realStates = await api.getRealEstates();

    // then
    expect(realStates).toBeDefined();
    expect(Array.isArray(realStates)).toBe(true);
});

test('getRealEstateById_nominalCase_returnsArray', async () => {
    // given
    const api = new RealEstateApi();
    const id = 1;

    // when
    const realEstate = await api.getRealEstateById(id);

    // then
    expect(realEstate).toBeDefined();
    expect(typeof realEstate).toBe('object');
    expect(realEstate.id).toBe(id);
});

