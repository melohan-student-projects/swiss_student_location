import { test } from 'vitest';
import {expect} from "vitest";
import RealStateApi from "../src/services/realstate-api";


test('getTypes', async () => {
    const api = new RealStateApi();
    const types = await api.getTypes();

    expect(types).toBeDefined();
    expect(Array.isArray(types)).toBe(true);
});
//test for the type name appartement to be in the object using give when then
test('getTypeByName', async () => {
    const api = new RealStateApi();
    const types = await api.getTypes();
    const type = types.find(type => type.name === 'Appartement');
    expect(type).toBeDefined();
    expect(type?.name).toBe('Appartement');
});

//test for the type name Studio to be in the object using give when then
test('getTypeByName', async () => {
    const api = new RealStateApi();
    const types = await api.getTypes();
    const type = types.find(type => type.name === 'Studio');
    expect(type).toBeDefined();
    expect(type?.name).toBe('Studio');
});
//test for the type name Villa to be in the object using give when then
test('getTypeByName', async () => {
    const api = new RealStateApi();
    const types = await api.getTypes();
    const type = types.find(type => type.name === 'Villa');
    expect(type).toBeDefined();
    expect(type?.name).toBe('Villa');
});
