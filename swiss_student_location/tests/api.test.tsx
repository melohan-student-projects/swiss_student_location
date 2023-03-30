import { test } from 'vitest';
import {expect} from "vitest";
import RealStateApi from "../src/services/realstate-api";

test('getRealEstates_nominalCase_returnsArray', async () => {
    //given
    const api = new RealStateApi();

    // when
    const realStates = await api.getRealStates();

    // then
    expect(realStates).toBeDefined();
    expect(Array.isArray(realStates)).toBe(true);
});

test('getRealEstateById_nominalCase_returnsArray', async () => {
    // given
    const api = new RealStateApi();
    const id = 1;

    // when
    const realState = await api.getRealStateById(id);

    // then
    expect(realState).toBeDefined();
    expect(typeof realState).toBe('object');
    expect(realState.id).toBe(id);
});

