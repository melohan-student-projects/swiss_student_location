import { test } from 'vitest';
import {expect} from "vitest";
import LocalDataService from "@services/LocalDataService";


test('getCantons_nominalCase_returnsArray', async () => {
    // given
    const localData = new LocalDataService();

    // when
    const cantons = await localData.getCantons();

    // then
    expect(cantons).toBeDefined();
    expect(Array.isArray(cantons)).toBe(true);
});

test('getCantons_containsExpectedData_success', async () => {
    // given
    const localData = new LocalDataService();

    // when
    const cantons = await localData.getCantons();

    // then
    expect(cantons[0].name).toBe("Aargau");
})

