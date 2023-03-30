import { test } from 'vitest';
import {expect} from "vitest";
import RealStateApi from "../src/services/realstate-api";


test('getCantons', async () => {
    const api = new RealStateApi();
    const cantons = await api.getCantons();

    expect(cantons).toBeDefined();
    expect(Array.isArray(cantons)).toBe(true);
});
//test for the first canton name in the list to be Aargau
test('getCantons', async () => {
    const api = new RealStateApi();
    const cantons = await api.getCantons();

    expect(cantons[0].name).toBe("Aargau");
})

//test for the last canton name in the list to be Zürich
test('getCantons', async () => {
    const api = new RealStateApi();
    const cantons = await api.getCantons();

    expect(cantons[cantons.length - 1].name).toBe("Zürich");
})

//test for the canto name vaud to be in the list
test('getCantons', async () => {
    const api = new RealStateApi();
    const cantons = await api.getCantons();

    expect(cantons.map(c => c.name)).toContain("Vaud");
})
//test for the canton name californie to not be in the list
test('getCantons', async () => {
    const api = new RealStateApi();
    const cantons = await api.getCantons();

    expect(cantons.map(c => c.name)).not.toContain("Californie");
})