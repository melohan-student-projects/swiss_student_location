import { test } from 'vitest';
import {expect} from "vitest";
import RealStateApi from "../src/services/realstate-api";


test('getCantons_nominalCase_returnsArray', async () => {
    // given
    const api = new RealStateApi();

    // when
    const cantons = await api.getCantons();

    // then
    expect(cantons).toBeDefined();
    expect(Array.isArray(cantons)).toBe(true);
});

test('getCantons_containsExpectedData_success', async () => {
    // given
    const api = new RealStateApi();

    // when
    const cantons = await api.getCantons();

    // then
    expect(cantons[0].name).toBe("Aargau");
})

